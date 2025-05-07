import { NextRequest, NextResponse } from "next/server";
import { toneStyleService } from "@/services/toneStyleService";

export async function GET() {
  try {
    const toneStyles = await toneStyleService.getAll();
    return NextResponse.json(toneStyles);
  } catch (error) {
    console.error("GET /api/tone-styles error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, description } = await req.json();
    const newToneStyle = await toneStyleService.create({ name, description });
    return NextResponse.json(newToneStyle, { status: 201 });
  } catch (error) {
    console.error("POST /api/tone-styles error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
