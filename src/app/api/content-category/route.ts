// app/api/content-category/route.ts
import { NextResponse } from 'next/server';
import {
  createContentCategory,
  getAllContentCategories
} from '@/services/contentCategoryService';

export async function GET() {
  try {
    const categories = await getAllContentCategories();
    return NextResponse.json(categories);
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
