// app/api/content-format/[id]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import {
  getContentFormatById,
  updateContentFormat,
  deleteContentFormat,
} from '@/services/db/contentFormatService';

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const format = await getContentFormatById(params.id);
    if (!format) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 });
    }
    return NextResponse.json(format);
  } catch (error) {
    console.error('Error fetching content format:', error);
    return NextResponse.json(
      { error: 'Failed to fetch content format' },
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
    const updated = await updateContentFormat(params.id, body);
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating content format:', error);
    return NextResponse.json(
      { error: 'Failed to update content format' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const deleted = await deleteContentFormat(params.id);
    return NextResponse.json(deleted);
  } catch (error) {
    console.error('Error deleting content format:', error);
    return NextResponse.json(
      { error: 'Failed to delete content format' },
      { status: 500 }
    );
  }
}
