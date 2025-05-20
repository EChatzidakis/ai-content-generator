import { NextRequest, NextResponse } from "next/server";
import { contentToneService } from "@/services/db/contentToneService";

export async function GET() {
  try {
    const contentTones = await contentToneService.getAll();
    return NextResponse.json(contentTones);
  } catch (error) {
    console.error("GET /api/tone-styles error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, description } = await req.json();
    const newContentTone = await contentToneService.create({ name, description });
    return NextResponse.json(newContentTone, { status: 201 });
  } catch (error) {
    console.error("POST /api/tone-styles error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
