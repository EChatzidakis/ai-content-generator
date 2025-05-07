import { NextResponse } from "next/server";
import {
  getAudienceById,
  updateAudience,
  deleteAudience,
} from "@/services/audienceService";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const audience = await getAudienceById(params.id);
    if (!audience) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(audience);
  } catch (error) {
    console.error("Error fetching audience:", error);
    return NextResponse.json({ error: "Failed to fetch audience" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const updated = await updateAudience(params.id, body);
    return NextResponse.json(updated);
  } catch (error) {
    console.error("Error updating audience:", error);
    return NextResponse.json({ error: "Failed to update audience" }, { status: 500 });
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const deleted = await deleteAudience(params.id);
    return NextResponse.json(deleted);
  } catch (error) {
    console.error("Error deleting audience:", error);
    return NextResponse.json({ error: "Failed to delete audience" }, { status: 500 });
  }
}
