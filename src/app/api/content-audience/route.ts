import { NextResponse } from 'next/server';
import { createAudience, getAllAudiences } from '@/services/db/audienceService';
import { ContentAudience } from '@/types/content';

export async function GET() {
  try {
    const audiences = await getAllAudiences();

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
    const body = await req.json();
    const audience = await createAudience(body);
    return NextResponse.json(audience, { status: 201 });
  } catch (error) {
    console.error('Error creating audience:', error);
    return NextResponse.json(
      { error: 'Failed to create audience' },
      { status: 500 }
    );
  }
}
