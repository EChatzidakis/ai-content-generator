import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

interface HeaderProps {
  children: React.ReactNode;
}

const TitleFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 125px;
  padding: 16px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`;

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <AppBar position="static">
      <FlexWrapper>
        <TitleFlexWrapper>
          <AutoFixHighIcon />
          <Link href="/">LexiGen</Link>
        </TitleFlexWrapper>
        {children}
      </FlexWrapper>
    </AppBar>
  );
};

export default Header;
