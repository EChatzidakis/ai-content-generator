import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/options';
import {
  createContentCategory,
  getAllContentCategories
} from '@/services/db/contentCategoryService';
import { ContentCategory } from '@/types/content';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const categories = await getAllContentCategories();

    const contentCategoryDTO: ContentCategory[] = categories.map(
      (category) => ({
        id: category.id,
        name: category.name,
        description: category.description,
        types: category.types ?? []
      })
    );
    return NextResponse.json(contentCategoryDTO);
  } catch (error) {
    console.error('Error fetching content categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch content categories' },
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
    const { name, description } = body;

    if (!name || !description) {
      return NextResponse.json(
        { error: 'Missing name or description' },
        { status: 400 }
      );
    }

    const category = await createContentCategory({ name, description });
    return NextResponse.json(category, { status: 201 });
  } catch (error) {
    console.error('Error creating content category:', error);
    return NextResponse.json(
      { error: 'Failed to create content category' },
      { status: 500 }
    );
  }
}
