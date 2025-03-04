'use client';
import React from 'react';
import { signIn } from 'next-auth/react';
import Card from '../../components/ui/Card';
import Divider from '../../components/ui/Divider';
import Button from '../../components/ui/Button';

const SignIn = () => {
  const cardContent = (
    <>
      <p>Sign in with GitHub</p>
      <Button
        onClick={() => signIn('github')}
        color="black"
      >
        Sign in
      </Button>
      <Divider text="OR" />
      <p>add credentials here</p>
    </>
  );

  return (
    <Card
      title="Sign in!"
      hasButton={false}
      buttonName="Sign in"
      isButtonDisabled={false}
      onButtonClick={() => signIn('github')}
      widthClass='w-[350px]'
    >
      {cardContent}
    </Card>
  );
};
export default SignIn;
