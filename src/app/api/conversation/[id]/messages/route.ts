import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/options';
import { getUserByEmail } from '@/services/db/userService';
import { generateResponse } from '@/lib/openai';
import {
  getConversationById,
  updateConversationTitleByConversationId
} from '@/services/db/conversationService';

export async function POST(
  req: NextRequest,
  ctx: { params: { conversationId: string } }
) {
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
  } catch (error) {
    console.error('Error in POST /api/conversation/[id]/messages:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
