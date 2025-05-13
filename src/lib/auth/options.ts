
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import type { AuthOptions } from 'next-auth';
import { getUserByEmail } from '@/services/userService';
import { handleCredentialsSignIn, handleOAuthSignIn } from '@/lib/auth/handlers';
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
