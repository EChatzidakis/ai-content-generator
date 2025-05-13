// handlers.ts
import { ApiError } from '../ApiError';
import { getUserById, getUserByProviderUserId, createUserFromProvider, getUserByEmail } from '@/services/userService';
import type { User as NextAuthUser, Account } from 'next-auth';
import bcrypt from 'bcrypt';

export const handleCredentialsSignIn = async (userId: string) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError('User not found during credential sign-in', 404);
  }
  return true;
};


export const handleOAuthSignIn = async (user: NextAuthUser, account?: Account | null) => {
  const providerUserId = user.id;
  if (!providerUserId) {
    throw new ApiError('Missing provider user ID', 400);
  }

  const existingUser = await getUserByProviderUserId(providerUserId);
  if (existingUser) {
    return true;
  }

  if (!account) {
    throw new ApiError('Account info is missing', 500);
  }

  try {
    const name = user.name || `${account.provider}_user`;
    const email = user.email ?? undefined;
    const image_url = user.image || undefined;
    const provider = account.provider;
    const provider_user_id = providerUserId.toString();

    await createUserFromProvider({ name, email, image_url, provider, provider_user_id });
  } catch (error) {
    console.error('Error inserting OAuth user:', error);
    throw new ApiError('Failed to create user from provider', 500);
  }

  return true;
};

export const validateCredentialsLogin = async (email: string, password: string) => {
  if (!email || !password) {
    throw new ApiError('Email and password are required', 400);
  }

  const user = await getUserByEmail(email);
  if (!user) {
    throw new ApiError('No user found with this email', 404);
  }

  if (!user.password_hash) {
    throw new ApiError('User does not have a password set', 400);
  }

  const isMatch = await bcrypt.compare(password, user.password_hash);
  if (!isMatch) {
    throw new ApiError('Invalid password', 401);
  }

  // Return only safe user fields
  const { id, name, email: userEmail, image_url } = user;
  return { id, name, email: userEmail, image_url };
};