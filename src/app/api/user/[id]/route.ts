import { NextResponse } from "next/server";
import { getUserById } from "@/services/db/userService";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const user = await getUserById(id);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch user" }, { status: 500 });
  }
}
