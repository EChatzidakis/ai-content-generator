import { NextResponse } from "next/server";
import {
  createAudience,
  getAllAudiences,
} from "@/services/db/audienceService";

export async function GET() {
  try {
    const audiences = await getAllAudiences();
    return NextResponse.json(audiences);
  } catch (error) {
    console.error("Error fetching audiences:", error);
    return NextResponse.json({ error: "Failed to fetch audiences" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const audience = await createAudience(body);
    return NextResponse.json(audience, { status: 201 });
  } catch (error) {
    console.error("Error creating audience:", error);
    return NextResponse.json({ error: "Failed to create audience" }, { status: 500 });
  }
}
