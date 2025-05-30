import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/options';
import { getAllContentTones, createContentTone } from '@/services/db/contentToneService';
import { ContentTone } from '@/types/content';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const contentTones = await getAllContentTones();
    
    const contentTOnesDTO: ContentTone[] = contentTones.map((tone) => {
      const { id, name, description } = tone;
      return { id, name, description };
    });

    return NextResponse.json(contentTOnesDTO);
  } catch (error) {
    console.error('GET /api/tone-styles error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, description } = await req.json();
    const newContentTone = await createContentTone({
      name,
      description
    });
    return NextResponse.json(newContentTone, { status: 201 });
  } catch (error) {
    console.error('POST /api/tone-styles error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
