import { NextResponse } from "next/server";
import { getAllContentTypes, createContentType } from "@/services/contentTypeService";

// GET /api/content-types
export async function GET() {
  try {
    const contentTypes = await getAllContentTypes();
    return NextResponse.json(contentTypes, { status: 200 });
  } catch (error) {
    console.error("[GET] /api/content-types:", error);
    return NextResponse.json({ error: "Failed to fetch content types" }, { status: 500 });
  }
}

// POST /api/content-types
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newContentType = await createContentType(body);
    return NextResponse.json(newContentType, { status: 201 });
  } catch (error) {
    console.error("[POST] /api/content-types:", error);
    return NextResponse.json({ error: "Failed to create content type" }, { status: 400 });
  }
}
