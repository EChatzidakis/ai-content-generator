'use client';
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

interface HeaderProps {
  children?: React.ReactNode;
}

// to acommodate for the avatar height and padding
const HEADER_HEIGHT_PX = 54;

const StyledAppBar = styled(AppBar).attrs({
  elevation: 0,
  position: 'static'
})`
  background-color: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  min-height: ${HEADER_HEIGHT_PX}px;
  display: flex; /* enables direct flex-centering of inner wrapper */
  justify-content: center;
`;

const FlexWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing(4)};
  height: ${HEADER_HEIGHT_PX}px; /* keeps content vertically centred */
`;

const TitleFlexWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const HeaderLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header: React.FC<HeaderProps> = ({ children }) => (
  <StyledAppBar>
    <FlexWrapper>
      <TitleFlexWrapper>
        <AutoFixHighIcon fontSize="large" />
        <HeaderLink href="/">LexiGen</HeaderLink>
      </TitleFlexWrapper>
      {children}
    </FlexWrapper>
  </StyledAppBar>
);

export default Header;
