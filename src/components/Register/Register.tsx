'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import styled from 'styled-components';
import { Button, Card, Input } from '../../components/UI';

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

interface RegisterComponentProps {
  handleSetShowRegister: () => void;
}

const RegisterComponent: React.FC<RegisterComponentProps> = ({ handleSetShowRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  console.log(handleSetShowRegister);

  const handleRegister = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/user', { name, email, password });

      if (response.status === 201) {
        // Auto sign in the user after registration
        await signIn('credentials', { email, password });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegisterUsernameOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setName(value);
  };

  const handleRegisterEmailOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleRegisterPasswordOnChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setPassword(value);
  };

  const registerPanel = (
    <>
      <Input
        placeholder="Username"
        value={name}
        onChange={handleRegisterUsernameOnChange}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={handleRegisterEmailOnChange}
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={handleRegisterPasswordOnChange}
        type="password"
      />
      <div>
        <p>
          Your account, with all its data, will be deleted a month after the
          account creation
        </p>
      </div>
      <Button onClick={handleRegister}>Register</Button>
    </>
  );

  const cardBody = registerPanel;
  const cardTitle = 'Register!';

  console.log('isLoading: ', isLoading);
  return (
    <Card sx={{ width: '400px', margin: 'auto', padding: '20px' }}>
      <CardTitle>{cardTitle}</CardTitle>
      {cardBody}
    </Card>
  );
};

export default RegisterComponent;
