import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/options';
import { getUserByEmail } from '@/services/db/userService';
import { PromptSettingsDTO } from '@/types/conversation';
import { getConversationsByUserId } from '@/services/db/conversationService';
import prisma from '@/lib/prisma';

/**
 * Fetches all conversations for the authenticated user.
 * @returns List of conversations for the authenticated user
 */
export async function GET() {
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

    //

    const result = await getConversationsByUserId(user.id);

    return NextResponse.json(result);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to generate text' },
      { status: 500 }
    );
  }
}

/**
 * This endpoint creates a new conversation and generates an AI response based on the provided prompt settings.
 * It also updates the conversation title based on the user's input.
 *
 * @param req Request object containing the prompt settings
 * @returns The created conversation with the initial message and AI response
 */
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
    const { userInput } = body;

    // create a new Conversation entity
    const conversation = await prisma.$transaction(async (tx) => {
      const _conversation = await tx.conversation.create({
        data: {
          userId: user.id,
          promptSettings: JSON.stringify(body),
          title: 'New Chat'
        }
      });

      await tx.message.create({
        data: {
          conversationId: _conversation.id,
          role: 'user',
          content: userInput,
          timestamp: new Date()
        }
      });

      return tx.conversation.findUnique({
        where: { id: _conversation.id },
        include: { messages: true }
      });
    });

    return NextResponse.json(conversation);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Failed to generate text' },
      { status: 500 }
    );
  }
}
