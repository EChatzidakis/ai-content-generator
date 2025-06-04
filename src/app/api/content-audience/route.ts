import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/options';
import {
  createContentAudience,
  getAllContentAudiences
} from '@/services/db/contentAudienceService';
import { ContentAudience } from '@/types/content';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const audiences = await getAllContentAudiences();

    const contentAudienceDTO: ContentAudience[] = audiences.map((audience) => {
      const { id, name, description } = audience;
      return { id, name, description };
    });

    return NextResponse.json(contentAudienceDTO);
  } catch (error) {
    console.error('Error fetching audiences:', error);
    return NextResponse.json(
      { error: 'Failed to fetch audiences' },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const audience = await createContentAudience(body);
    return NextResponse.json(audience, { status: 201 });
  } catch (error) {
    console.error('Error creating audience:', error);
    return NextResponse.json(
      { error: 'Failed to create audience' },
      { status: 500 }
    );
  }
}
