import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { createUserWithCredentials, getUserById, getUserByEmail } from "@/services/userService";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    const newUser = await createUserWithCredentials(name, email, password);

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, name, email, password, image_url, provider, provider_user_id } = await req.json();

    // Check if user exists
    const existingUser = await getUserById(id);
    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Ensure email is unique (if it's being changed)
    if (email && email !== existingUser.email) {
      const existingEmailUser = await getUserByEmail(email);
      if (existingEmailUser) {
        return NextResponse.json({ error: "Email already in use" }, { status: 400 });
      }
    }    

   // Hash password if provided
   const updatedFields = { name, email, image_url, provider, provider_user_id, password_hash: existingUser.password_hash, password_salt: existingUser.password_salt };

   if (password) {
     const password_salt = await bcrypt.genSalt(10);
     const password_hash = await bcrypt.hash(password, password_salt);
     updatedFields.password_hash = password_hash;
     updatedFields.password_salt = password_salt;
   }

   const updatedUser = await prisma.user.update({
     where: { id },
     data: updatedFields,
   });

   return NextResponse.json(updatedUser);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    // Check if user exists
    const existingUser = await getUserById(id);
    if (!existingUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    await prisma.user.delete({ where: { id } });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}
