import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/options';
import { getUserByEmail } from '@/services/db/userService';
import { generateResponse } from '@/lib/openai';
import { buildEthicalEvaluationSystemPrompt } from '@/lib/prompt';
import { PromptSettings, PromptSettingsDTO } from '@/types/conversation';
import { OpenAIOptions, OpenAIMessage } from '@/types/openai';
import { getContentCategoryById } from '@/services/db/contentCategoryService';
import { getContentTypeById } from '@/services/db/contentTypeService';
import { getContentFormatById } from '@/services/db/contentFormatService';
import { getContentToneById } from '@/services/db/contentToneService';
import { getContentAudienceById } from '@/services/db/contentAudienceService';

export async function POST(req: Request) {
  try {
    // authenticate
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const userEmail = session.user?.email;
    if (!userEmail) {
      return NextResponse.json(
        { error: 'Resource not found' },
        { status: 404 }
      );
    }
    const user = await getUserByEmail(userEmail);
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // request body is expected to be of PromptSettingsDTO type
    const body: PromptSettingsDTO = await req.json();
    const { category, type, tone, format, audience, userInput } = body;

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

    // Evaluate user prompt
    const evaluationPrompt = buildEthicalEvaluationSystemPrompt(promptSettings);
    const evaluationMessages: OpenAIMessage[] = [
      {
        role: 'system',
        content: evaluationPrompt
      },
      {
        role: 'user',
        content: userInput
      }
    ];

    const openAIEvalOptions: OpenAIOptions = {
      messages: evaluationMessages,
      model: 'gpt-4o',
      temperature: 0.2,
      maxTokens: 1000
    };

    const evaluationResult = await generateResponse(openAIEvalOptions);
    const jsonResult = JSON.parse(evaluationResult);
    
    return NextResponse.json({ jsonResult });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to generate text' },
      { status: 500 }
    );
  }
}
