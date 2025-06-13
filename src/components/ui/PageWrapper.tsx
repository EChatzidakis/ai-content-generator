'use client';
import React from 'react';
import styled from 'styled-components';

interface PageWrapperProps {
  children: React.ReactNode;
}

const StyledPageWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
