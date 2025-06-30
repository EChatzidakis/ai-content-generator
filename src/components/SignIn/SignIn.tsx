'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { signIn } from 'next-auth/react';
import { Button, Divider, Input } from '../UI';
import GitHubIcon from '@mui/icons-material/GitHub';

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

interface SignInComponentProps {
  handleSetShowRegister: () => void;
}

const SignInComponent: React.FC<SignInComponentProps> = ({
  handleSetShowRegister
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCredentialsPasswordOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleCredentialsEmailOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setEmail(value);
  };

  const credentials = (
    <FlexWrapper>
      <Input
        id="email"
        label="Email"
        value={email}
        onChange={handleCredentialsEmailOnChange}
      />
      <Input
        id="Password"
        label="Password"
        value={password}
        onChange={handleCredentialsPasswordOnChange}
        type="password"
      />
      <Button onClick={() => signIn('credentials', { email, password })} fullWidth>
        Sign in
      </Button>
    </FlexWrapper>
  );

  const provider = (
    <>
      <Button
        onClick={() => signIn('github')}
        variant="contained"
        endIcon={<GitHubIcon />}
        fullWidth
      >
        GitHub
      </Button>
    </>
  );

  const cardContent = (
    <>
      {provider}
      <Divider />
      {credentials}
      <Divider>OR</Divider>
      <Button fullWidth onClick={handleSetShowRegister}>Register using your email</Button>
    </>
  );

  const cardTitle = 'Sign in!';

  return (
    <>
      <CardTitle>{cardTitle}</CardTitle>
      {cardContent}
    </>
  );
};

export default SignInComponent;
