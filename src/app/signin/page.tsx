'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import Card from '../../components/ui/Card';
// import { useRouter } from 'next/router';
// import { SessionProvider } from 'next-auth/react';

const SignIn = () => {
  // const { data: session } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (session) {
  //     router.push('/');
  //   }
  // }, [session, router]);

  return (
    // <SessionProvider>
    <Card
      title="Sign in with GitHub"
      hasButton
      buttonName="Sign in"
      isButtonDisabled={false}
      onButtonClick={() => signIn('github')}
    />
    // </SessionProvider>
  );
};
export default SignIn;
