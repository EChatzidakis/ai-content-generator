import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import type { AuthOptions } from 'next-auth';
import { createUser, getUserByProviderUserId, getUserByEmail } from '@/services/userService';

// For more information on options, go to:
// https://next-auth.js.org/configuration/options
// TODO Add credentials provider

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
  
        const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
        if (!isPasswordValid) {
          throw new Error('Invalid password');
        }
  
        return { id: user.id, name: user.name, email: user.email };
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
      const userProviderId = user.id;
      const existingUser = await getUserByProviderUserId(userProviderId);
      console.log('existingUser:', existingUser);
      if (!existingUser) {
        if (!account) {
          console.error('Account is null');
          return false;
        }
      
        console.log('User not found, creating user');
        await createUser(user, account);
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
