import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import {
  createUserWithCredentials,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById
} from '@/services/db/userService';
import { ApiError } from '@/lib/ApiError';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      throw new ApiError('Name, email, and password are required', 400);
    }

    // email is unique
    // check if user with this email already exists
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      throw new ApiError('Email already in use', 400);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const data = {
      name,
      email,
      password_hash: hashedPassword,
      password_salt: salt
    };
    const newUser = await createUserWithCredentials(data);
    return NextResponse.json(newUser, { status: 201 });

  } catch (error) {
    if (error instanceof ApiError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode }
      );
    }
    return NextResponse.json(
      { error: 'Failed to create user' },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const { id, name, email, password, image_url, provider, provider_user_id } =
      await req.json();

    if (!id) {
      throw new ApiError('User ID is required', 400);
    }

    const existingUser = await getUserById(id);
    if (!existingUser) {
      throw new ApiError('User not found', 404);
    }

    // email is unique
    // check if user with this email already exists
    if (email && email !== existingUser.email) {
      const existingEmailUser = await getUserByEmail(email);
      if (existingEmailUser) {
        throw new ApiError('Email already in use', 400);
      }
    }

    const updatedFields = {
      name,
      email,
      image_url,
      provider,
      provider_user_id,
      password_hash: existingUser.password_hash,
      password_salt: existingUser.password_salt
    };

    // TODO: Improve this
    // TODO: Check if password is empty and only update if password is provided and its not the same as the existing password
    // TODO: If password is the same as the existing password, do not update it
    if (password) {
      const password_salt = await bcrypt.genSalt(10);
      const password_hash = await bcrypt.hash(password, password_salt);
      updatedFields.password_hash = password_hash;
      updatedFields.password_salt = password_salt;
    }

    const updatedUser = await updateUserById(id, updatedFields);
    if (!updatedUser) {
      throw new ApiError('Failed to update user', 500);
    }

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode }
      );
    }
    return NextResponse.json(
      { error: 'Failed to update user' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    if (!id) {
      throw new ApiError('User ID is required', 400);
    }

    const existingUser = await getUserById(id);
    if (!existingUser) {
      throw new ApiError('User not found', 404);
    }

    await deleteUserById(id);

    return NextResponse.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    if (error instanceof ApiError) {
      return NextResponse.json(
        { error: error.message },
        { status: error.statusCode }
      );
    }
    return NextResponse.json(
      { error: 'Failed to delete user' },
      { status: 500 }
    );
  }
}
