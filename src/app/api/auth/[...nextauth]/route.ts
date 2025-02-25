import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
// import CredentialsProvider from 'next-auth/providers/credentials';
import type { AuthOptions } from 'next-auth';
// import bcrypt from 'bcrypt';

// For more information on options, go to:
// https://next-auth.js.org/configuration/options

// TODO Must add the `pages` parameter to the `authOptions` object
// TODO Add credentials provider

export const authOptions: AuthOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    })
    // CredentialsProvider({
    //   name: 'Email',
    //   credentials: {
    //     email: { label: 'Email', type: 'email' },
    //     password: { label: 'Password', type: 'password' }
    //   },
    //   async authorize(credentials) {
    //     const user = console.log(credentials.email)// await getUserByEmail(credentials.email);
    //     if (!user) {
    //       throw new Error('User not found');
    //     }
    //     const isValid = await bcrypt.compare(
    //       credentials.password,
    //       user.password
    //     );
    //     if (!isValid) {
    //       throw new Error('Invalid credentials');
    //     }
    //     return user;
    //   }
    // })
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
      console.log('signIn: ', { user, account, profile, email, credentials });
      return true;
    },
    // async session({ session, token, user }) {
    //   // console.log all the data
    //   console.log('session:', { session, token, user });
    //   return session;
    // }
  },
  // events: {
  //   async signIn(message) { 
  //     /* on successful sign in */
  //     console.log('######### \n signIn:', message, '\n#########');
  //   },
  //   async session(message) { 
  //     /* session is active */ 
  //     console.log('######### \n session:', message, '\n#########');
  //   },
  // },
  // logger: {
  //   error(code, metadata) {
  //     console.error(code, metadata)
  //   },
  //   warn(code) {
  //     console.warn(code)
  //   },
  //   debug(code, metadata) {
  //     console.debug(code, metadata)
  //   }
  // }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
