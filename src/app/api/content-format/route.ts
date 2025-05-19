// app/api/content-format/route.ts
import { NextResponse } from 'next/server';
import {
  createContentFormat,
  getAllContentFormats,
} from '@/services/db/contentFormatService';

export async function GET() {
  try {
    const formats = await getAllContentFormats();
    return NextResponse.json(formats);
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
