import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/options';
import { getUserByEmail } from '@/services/db/userService';
import { getContentCategoryById } from '@/services/db/contentCategoryService';
import { getContentTypeById } from '@/services/db/contentTypeService';
import { getContentFormatById } from '@/services/db/contentFormatService';
import { getContentToneById } from '@/services/db/contentToneService';
import { getContentAudienceById } from '@/services/db/contentAudienceService';
import {
  createMessage,
  getConversationById,
  updateConversationTitleByConversationId
} from '@/services/db/conversationService';
import { OpenAIStream } from '@/lib/openaiStream';
import {
  buildSystemPrompt,
  buildConversationTitleSystemPrompt
} from '@/lib/prompt';
import { PromptSettings, PromptSettingsDTO } from '@/types/conversation';
import { OpenAIMessage, OpenAIOptions } from '@/types/openai';
import { generateResponse } from '@/lib/openai';

export async function GET(req: NextRequest) {
  // authenticate
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const userEmail = session.user?.email;
  if (!userEmail) {
    return NextResponse.json({ error: 'Resource not found' }, { status: 404 });
  }
  const user = await getUserByEmail(userEmail);
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  const { searchParams } = new URL(req.url);
  const conversationId = searchParams.get('conversationId');

  if (!conversationId) {
    return new Response('Missing conversationId from params', { status: 400 });
  }

  const conversation = await getConversationById(conversationId);
  if (!conversation) {
    return new Response('Conversation not found', { status: 404 });
  }

  // build the API request to OpenAI
  const promptSettingsDTO: PromptSettingsDTO = JSON.parse(
    conversation.promptSettings
  );
  const { category, type, tone, format, audience, userInput } =
    promptSettingsDTO;

  const _category = await getContentCategoryById(category);
  const _type = await getContentTypeById(type);
  const _audience = await getContentAudienceById(audience);
  const _tone = await getContentToneById(tone);
  const _format = await getContentFormatById(format);
  if (!_category || !_type || !_tone || !_format || !_audience) {
    return NextResponse.json(
      { error: 'Invalid content references' },
      { status: 400 }
    );
  }

  const promptSettings: PromptSettings = {
    category: { name: _category.name, description: _category.description },
    type: { name: _type.name, description: _type.description },
    tone: { name: _tone.name, description: _tone.description },
    format: { name: _format.name, description: _format.description },
    audience: { name: _audience.name, description: _audience.description },
    userInput
  };

  const systemPrompt = buildSystemPrompt(promptSettings);
  const systemMessage: OpenAIMessage = {
    role: 'system',
    content: systemPrompt
  };
  const existingMessages: OpenAIMessage[] = conversation.messages.map(
    (msg) => ({
      role: msg.role as 'system' | 'user' | 'assistant',
      content: msg.content
    })
  );
  const messages: OpenAIMessage[] = [systemMessage, ...existingMessages];
  const openAIMessageOptions: OpenAIOptions = {
    messages,
    model: 'gpt-4o',
    temperature: _type.temperature,
    maxTokens: 5000
  };

  // build system prompt for conversation title
  const conversationTitleSystemPrompt =
    buildConversationTitleSystemPrompt(userInput);
  const conversationTitleSystemMessages: OpenAIMessage[] = [
    {
      role: 'system',
      content: conversationTitleSystemPrompt
    },
    {
      role: 'user',
      content: userInput
    }
  ];

  // create a stream response
  const encoder = new TextEncoder();
  let accumulated = '';

  const stream = new ReadableStream({
    async start(controller) {
      try {
        await OpenAIStream({
          openAIMessageOptions,
          onDelta: (delta) => {
            accumulated += delta;
            const payload = `data: ${JSON.stringify({ token: delta })}\n\n`;
            controller.enqueue(encoder.encode(payload));
          },
          onComplete: async () => {
            const created = await createMessage({
              conversationId,
              role: 'assistant',
              content: accumulated,
              timestamp: new Date()
            });

            // generate and persist the conversation title
            const title = await generateResponse({
              messages: conversationTitleSystemMessages,
              model: 'gpt-4o',
              temperature: 0.7,
              maxTokens: 1000
            });

            await updateConversationTitleByConversationId({
              conversationId,
              title
            });

            // stream completion events
            controller.enqueue(
              encoder.encode(
                `event: title\ndata:${JSON.stringify({ title })}\n\n`
              )
            );

            controller.enqueue(
              encoder.encode(`event: done\ndata:${JSON.stringify(created)}\n\n`)
            );
            controller.close();
          }
        });
      } catch (err: unknown) {
        const message = err instanceof Error ? err.message : 'Unknown error';
        controller.enqueue(
          encoder.encode(`event: error\ndata: ${message}\n\n`)
        );
        controller.close();
      }
    }
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive'
    }
  });
}
