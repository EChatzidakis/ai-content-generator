import { NextRequest, NextResponse } from "next/server";
import { toneStyleService } from "@/services/toneStyleService";

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    const toneStyle = await toneStyleService.getById(params.id);
    if (!toneStyle) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(toneStyle);
  } catch (error) {
    console.error("GET /api/tone-styles/[id] error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json();
    const updated = await toneStyleService.update(params.id, body);
    return NextResponse.json(updated);
  } catch (error) {
    console.error("PUT /api/tone-styles/[id] error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string } }) {
  try {
    await toneStyleService.delete(params.id);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("DELETE /api/tone-styles/[id] error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
