'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Button, Card, Divider, Input } from '../../components/ui';
import { IconGithub } from '../../components/ui/icons';

const SignIn = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegister, setShowRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSetShowRegister = () => setShowRegister(!showRegister);

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/user', { name, email, password });

      if (response.status === 201) {
        // Auto sign in the user after registration
        await signIn('credentials', { email, password });
      }
    }
    catch (error) {
      console.error(error);
    }
    finally {
      setIsLoading(false);
    }
  };

  const credentials = (
    <>
      <Input placeholder="Email" value={email} onChange={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        onChange={setPassword}
        type="password"
      />
      <Button onClick={() => signIn('credentials', { email, password })}>
        Sign in
      </Button>
    </>
  );

  const provider = (
    <>
      <Button onClick={() => signIn('github')} color="black">
        GitHub
        <IconGithub />
      </Button>
    </>
  );

  const registerPanel = (
    <>
      <Input placeholder="Username" value={name} onChange={setName} />
      <Input placeholder="Email" value={email} onChange={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        onChange={setPassword}
        type="password"
      />
      <div>
        <p>
          Your account, with all its data, will be deleted a month after the
          account creation
        </p>
      </div>
      <Button onClick={handleRegister}>
        Register
      </Button>
    </>
  );

  const cardContent = (
    <>
      {provider}
      <Divider />
      {credentials}
      <Divider text="OR" />
      <Button onClick={handleSetShowRegister}>Register using your email</Button>
      <div className="text-center">
        <p>
          Your account, with all its data, will be deleted a month after the
          account creation
        </p>
      </div>
    </>
  );

  const cardBody = showRegister ? registerPanel : cardContent;
  const cardTitle = showRegister ? 'Register!' : 'Sign in!';

  console.log('isLoading: ', isLoading);
  return (
    <Card
      title={cardTitle}
      hasButton={false}
      buttonName="Sign in"
      isButtonDisabled={false}
      onButtonClick={() => signIn('github')}
      widthClass="w-[350px]"
    >
      {cardBody}
    </Card>
  );
};
export default SignIn;
