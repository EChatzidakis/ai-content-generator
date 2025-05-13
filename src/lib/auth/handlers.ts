// handlers.ts
import { getUserById, getUserByProviderUserId, createUserFromProvider } from '@/services/userService';
import type { User as NextAuthUser, Account } from 'next-auth';

export const handleCredentialsSignIn = async (userId: string) => {
  const user = await getUserById(userId);
  if (!user) {
    console.error('User not found during credential sign-in');
    return false;
  }
  return true;
};

export const handleOAuthSignIn = async (user: NextAuthUser, account?: Account | null) => {
  const providerUserId = user.id;
  const existingUser = await getUserByProviderUserId(providerUserId);

  if (!existingUser && account) {
    console.warn('User not found for OAuth, creating one...');
    await createUserFromProvider(user, account);
  }

  return true;
};
