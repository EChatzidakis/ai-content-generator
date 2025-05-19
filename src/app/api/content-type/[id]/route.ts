import { NextResponse } from "next/server";
import {
  getContentTypeById,
  updateContentType,
  deleteContentType,
} from "@/services/db/contentTypeService";

// GET /api/content-types/:id
export async function GET(_: Request, { params }: { params: { id: string } }) {
  try {
    const contentType = await getContentTypeById(params.id);
    if (!contentType) {
      return NextResponse.json({ error: "Content type not found" }, { status: 404 });
    }
    return NextResponse.json(contentType, { status: 200 });
  } catch (error) {
    console.error(`[GET] /api/content-types/${params.id}:`, error);
    return NextResponse.json({ error: "Failed to fetch content type" }, { status: 500 });
  }
}

// PUT /api/content-types/:id
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const updated = await updateContentType(params.id, body);
    return NextResponse.json(updated, { status: 200 });
  } catch (error) {
    console.error(`[PUT] /api/content-types/${params.id}:`, error);
    return NextResponse.json({ error: "Failed to update content type" }, { status: 400 });
  }
}

// DELETE /api/content-types/:id
export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    const deleted = await deleteContentType(params.id);
    return NextResponse.json(deleted, { status: 200 });
  } catch (error) {
    console.error(`[DELETE] /api/content-types/${params.id}:`, error);
    return NextResponse.json({ error: "Failed to delete content type" }, { status: 400 });
  }
}
