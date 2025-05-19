import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import type { AuthOptions } from 'next-auth';
import {
  handleCredentialsSignIn,
  handleOAuthSignIn,
  validateCredentialsLogin
} from '@/lib/auth/handlers';
import { ApiError } from '../ApiError';

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
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'example@example.com'
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const user = await validateCredentialsLogin(
            credentials?.email || '',
            credentials?.password || ''
          );
          return user;
        } catch (error) {
          if (error instanceof ApiError) {
            console.error(`[AUTH ERROR] ${error.statusCode}: ${error.message}`);
            throw new Error(error.message); // Let NextAuth handle display — avoid leaking statusCode
          }

          console.error('[UNEXPECTED AUTH ERROR]', error);
          throw new Error('An unexpected error occurred during login');
        }
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
      const provider = account?.provider;

      if (provider === 'credentials') {
        return await handleCredentialsSignIn(user.id);
      } else if (provider === 'github') {
        return await handleOAuthSignIn(user, account);
      }

      return false;
    },
    async session({ session, token, user }) {
      console.log('#################################\n');
      console.log('session backend:', { session, token, user });
      console.log('\n#################################\n');

      return session;
    }
  }
};
