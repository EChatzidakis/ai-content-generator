import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import type { AuthOptions } from 'next-auth';

// For more information on options, go to:
// https://next-auth.js.org/configuration/options
// TODO Add credentials provider

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
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
    async signIn({ user, account, profile, email, credentials }) {
      // console.log all the data
      console.log('#################################\n');
      console.log('signIn: ', { user, account, profile, email, credentials });
      console.log('\n#################################\n');
      return true;
    },
    async session({ session, token, user }) {
      // console.log all the data
      console.log('#################################\n');
      console.log('session:', { session, token, user });
      console.log('\n#################################\n');
      return session;
    }
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
