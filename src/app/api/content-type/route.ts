import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/options';
import {
  getAllContentTypes,
  createContentType
} from '@/services/db/contentTypeService';
import { ContentType } from '@/types/content';

// GET /api/content-types
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const contentTypes = await getAllContentTypes();

    const contentTypesDTO: ContentType[] = contentTypes.map((type) => ({
      id: type.id,
      name: type.name,
      description: type.description,
      categoryId: type.categoryId,
      category: type.category ?? [],
      defaultAudienceId: type.defaultAudienceId,
      defaultContentFormatId: type.defaultContentFormatId,
      defaultContentToneId: type.defaultContentToneId,
      audiences: type.audiences ?? [],
      formats: type.formats ?? [],
      tones: type.tones ?? []
    }));

    return NextResponse.json(contentTypesDTO, { status: 200 });
  } catch (error) {
    console.error('[GET] /api/content-types:', error);
    return NextResponse.json(
      { error: 'Failed to fetch content types' },
      { status: 500 }
    );
  }
}

// POST /api/content-types
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await req.json();
    const newContentType = await createContentType(body);
    return NextResponse.json(newContentType, { status: 201 });
  } catch (error) {
    console.error('[POST] /api/content-types:', error);
    return NextResponse.json(
      { error: 'Failed to create content type' },
      { status: 400 }
    );
  }
}
