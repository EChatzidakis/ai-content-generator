import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/options';
import {
  createContentFormat,
  getAllContentFormats,
} from '@/services/db/contentFormatService';
import { ContentFormat } from '@/types/content';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const formats = await getAllContentFormats();
    
    const contentFormatDTO: ContentFormat[] = formats.map((format) => {
      const { id, name, description } = format;
      return { id, name, description };
    });

    return NextResponse.json(contentFormatDTO);
  } catch (error) {
    console.error('Error fetching content formats:', error);
    return NextResponse.json(
      { error: 'Failed to fetch content formats' },
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

    const { name, description } = await req.json();

    if (!name || !description) {
      return NextResponse.json(
        { error: 'Name and description are required' },
        { status: 400 }
      );
    }

    const newFormat = await createContentFormat(name, description);
    return NextResponse.json(newFormat, { status: 201 });
  } catch (error) {
    console.error('Error creating content format:', error);
    return NextResponse.json(
      { error: 'Failed to create content format' },
      { status: 500 }
    );
  }
}
