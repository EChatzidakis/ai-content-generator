import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';

export const createUserFromProvider = async ({
  name,
  email,
  image_url,
  provider,
  provider_user_id
}: {
  name: string;
  email?: string;
  image_url?: string;
  provider: string;
  provider_user_id: string;
}) => {
  return prisma.user.create({
    data: { name, email, image_url, provider, provider_user_id }
  });
};

export const createUserWithCredentials = async (data: Prisma.UserCreateInput) => {
  return prisma.user.create({
    data
  });
};

export const getUserByEmail = async (email: string) => {
  return prisma.user.findFirst({
    where: { email }
  });
};

/**
 * Fetch a user by ID
 * @param id - The ID of the user
 * @returns The user object or null if not found
 */
export const getUserById = async (id: string) => {
  return prisma.user.findFirstOrThrow({
    where: { id }
  });
};

/**
 * Fetch a user by provider user ID
 * @param providerUserId - the provider user ID
 * @returns The user object or null if not found
 */
export const getUserByProviderUserId = async (providerUserId: string) => {
  if (!providerUserId) {
    return null;
  }
  return prisma.user.findFirst({
    where: { provider_user_id: providerUserId }
  });
};

export const deleteUserById = async (id: string) => {
  return prisma.user.delete({
    where: { id }
  });
};

export const updateUserById = async (id: string, data: Partial<Parameters<typeof prisma.user.update>[0]['data']>) => {
  return prisma.user.update({
    where: { id },
    data
  });
};