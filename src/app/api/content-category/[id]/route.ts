// app/api/content-category/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  getContentCategoryById,
  updateContentCategory,
  deleteContentCategory
} from '@/services/db/contentCategoryService';

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const category = await getContentCategoryById(params.id);
    if (!category) {
      return NextResponse.json({ error: 'Not Found' }, { status: 404 });
    }
    return NextResponse.json(category);
  } catch {
    return NextResponse.json(
      { error: 'Failed to fetch category' },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const { name, description } = body;

    const updated = await updateContentCategory(params.id, {
      name,
      description
    });
    return NextResponse.json(updated);
  } catch {
    return NextResponse.json(
      { error: 'Failed to update category' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const deleted = await deleteContentCategory(params.id);
    return NextResponse.json(deleted);
  } catch {
    return NextResponse.json(
      { error: 'Failed to delete category' },
      { status: 500 }
    );
  }
}
