import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import type { AuthOptions } from 'next-auth';
import { createUserFromProvider, getUserByProviderUserId, getUserByEmail, getUserById } from '@/services/userService';

// For more information on options, go to:
// https://next-auth.js.org/configuration/options

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'example@example.com' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required');
        }
  
        const user = await getUserByEmail(credentials.email);
        if (!user) {
          throw new Error('No user found with this email');
        }

        if (!user.password_hash) {
          throw new Error('User has no password set');
        }
        
        const isMatch = await bcrypt.compare(credentials.password, user.password_hash);
        if (!isMatch) {
          throw new Error('Invalid password');
        }

        const { id, name, email, image_url } = user;

        return { id, name, email, image_url };
      }
    })
  ],
  pages: {
    signIn: '/signin'
  },
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async redirect({ baseUrl }) {
      return baseUrl; // Always redirect to "/"
    },
    async signIn({ user, account }) {
      const authType = account?.type || 'credentials';

      if (authType === 'credentials') {
        const _user = await getUserById(user.id);
        if (!_user) {
          console.error('User not found');
          return false;
        }
      } else {
        const userProviderId = user.id;
        const existingUser = await getUserByProviderUserId(userProviderId);
        
        if (!existingUser) {
          if (!account) {
            console.error('Account is null');
            return false;
          }
        
          console.warn('User not found, creating user');
          await createUserFromProvider(user, account);
        }
      }
      return true;
    },
    async session({ session, token, user }) {
      console.log('#################################\n');
      console.log('session backend:', { session, token, user });
      console.log('\n#################################\n');

      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
