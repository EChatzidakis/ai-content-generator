import prisma from '@/lib/prisma';
import { User as NextAuthUser, Account } from 'next-auth';
import bcrypt from 'bcrypt';

// this is the user model
// model User {
//   id          String    @id @default(uuid())
//   name        String
//   email       String?    @unique
//   password    String?
//   image_url   String?
//   provider    String?
//   provider_user_id String?
//   createdAt   DateTime  @default(now())
//   conversations Conversation[]
// }

export const createUser = async (user: NextAuthUser, account: Account) => {
  const userProviderId = user.id || account?.providerAccountId;
  if (!userProviderId) {
    console.error('No user ID found');
    return false;
  }

  const existingUser = await getUserByProviderUserId(
    userProviderId?.toString()
  );
  if (existingUser) {
    console.log('User exists. \nExiting...');
    return true;
  }

  const image_url = user.image;
  const provider = account.provider;
  const provider_user_id = userProviderId.toString();
  const name = user.name || `${provider}_user`;

  const newUser = await prisma.user.create({
    data: { name, image_url, provider, provider_user_id }
  });

  return newUser;
};

export const createUserWithCredentials = async (name: string, email: string, password: string) => {
  if (!name || !email || !password) {
    throw new Error('All fields are required');
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    throw new Error('User already exists with this email');
  }

  const hashedPassword = await bcrypt.hash(password, 10); // Hash password with salt rounds = 10

  const newUser = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  });

  return newUser;
};

export const getUserByEmail = async (email: string) => {
  return prisma.user.findFirst({
    where: { email },
    select: {
      id: true,
      name: true,
      email: true,
      password: true,
      provider: true,
      image_url: true,
      createdAt: true
    }
  });
};

/**
 * Fetch a user by ID
 * @param id - The ID of the user
 * @returns The user object or null if not found
 */
export const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
    select: { id: true, name: true, email: true, createdAt: true }
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
    where: { provider_user_id: providerUserId },
    select: {
      id: true,
      name: true,
      email: true,
      provider: true,
      createdAt: true
    }
  });
};
