import prisma from "@/lib/prisma";

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

/**
 * Fetch a user by ID
 * @param id - The ID of the user
 * @returns The user object or null if not found
 */
export const getUserById = async (id: string) => {
  return prisma.user.findUnique({
    where: { id },
    select: { id: true, name: true, email: true, createdAt: true },
  });
};

/**
 * Fetch a user by provider user ID
 * @param providerUserId - the provider user ID
 * @returns The user object or null if not found
 */
export const getUserByProviderUserId = async (providerUserId: string) => {
  return prisma.user.findFirst({
    where: { provider_user_id: providerUserId },
    select: { id: true, name: true, email: true, createdAt: true },
  });
};