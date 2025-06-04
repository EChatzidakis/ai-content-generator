import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/options';
import { getUserByEmail } from '@/services/db/userService';
import { getConversationsByUserId } from '@/services/db/conversationService';

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
