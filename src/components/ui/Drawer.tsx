'use client';
import React from 'react';
import styled from 'styled-components';
import MuiDrawer from '@mui/material/Drawer';
import { DrawerProps } from '@mui/material/Drawer';

/**
 * Additional prop to control drawer width in pixels or any valid CSS size.
 */
interface ThemedDrawerProps extends DrawerProps {
  width?: number | string;
}

/**
 * Styled‑components wrapper that injects our design‑system tokens
 * into the underlying MUI Drawer paper.
 */
const StyledDrawer = styled(MuiDrawer)<{ $width: number | string }>`
  & .MuiDrawer-paper {
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    width: ${({ $width }) =>
      typeof $width === 'number' ? `${$width}px` : $width};
    box-sizing: border-box; /* prevents width + padding overflow */
  }
`;

const DrawerComponent: React.FC<ThemedDrawerProps> = ({
  open = true,
  width = 280,
  children,
  ...props
}) => {
  return (
    <StyledDrawer open={open} $width={width} {...props}>
      {children}
    </StyledDrawer>
  );
};

// Keep named export to match existing imports
export const Drawer = DrawerComponent;
