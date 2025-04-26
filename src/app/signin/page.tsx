'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Card } from '../../components/UI';
import SignInComponent from '@/components/SignIn/SignIn';
import RegisterComponent from '@/components/Register/Register';

const PageFlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: auto;
`;

const SignIn = () => {
  const [showRegister, setShowRegister] = useState(false);

  const handleSetShowRegister = () => setShowRegister(!showRegister);

  return (
    <PageFlexWrapper>
      <Card sx={{ width: '400px', margin: 'auto', padding: '20px' }}>
        {showRegister ? (
          <RegisterComponent handleSetShowRegister={handleSetShowRegister} />
        ) : (
          <SignInComponent handleSetShowRegister={handleSetShowRegister} />
        )}
      </Card>
    </PageFlexWrapper>
  );
};
export default SignIn;
