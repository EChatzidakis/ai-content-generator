'use client';
import axios from 'axios';
import React, { useState } from 'react';
import { signIn } from 'next-auth/react';
import styled from 'styled-components';
import { Button, Input } from '../../components/UI';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CardHeaderWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2)};
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 16px;
  width: 100%;
  text-align: center;
`;

const FieldsStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}; /* adjust here if needed */
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: ${({ theme }) => theme.spacing(6)};
`;

interface RegisterComponentProps {
  handleSetShowRegister: () => void;
}

const RegisterComponent: React.FC<RegisterComponentProps> = ({
  handleSetShowRegister
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    <FieldsStack>
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
      <ButtonWrapper>
        <Button onClick={handleRegister}>Register</Button>
      </ButtonWrapper>
    </FieldsStack>
  );

  const cardBody = registerPanel;
  const cardTitle = 'Register!';

  console.log('isLoading: ', isLoading);
  return (
    <>
      <CardHeaderWrapper>
        <Button
          variant="text"
          onClick={handleSetShowRegister}
          startIcon={<ArrowBackIcon />}
        >
          Back
        </Button>
        <CardTitle>{cardTitle}</CardTitle>
      </CardHeaderWrapper>
      {cardBody}
    </>
  );
};

export default RegisterComponent;
