'use client';
import React from 'react';
import styled, { css } from 'styled-components';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

/**
 * Themed button props – identical to MUI’s but we allow any extra intercepts later on.
 */
export type ButtonProps = MuiButtonProps;

const containedStyles = css`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  box-shadow: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    filter: brightness(0.9); /* simple darken */
  }
`;

const outlinedStyles = css`
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}14; /* 8% tint */
  }
`;

const textStyles = css`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}14; /* 8% tint */
  }
`;

const StyledButton = styled(MuiButton)<{ $variant: MuiButtonProps['variant'] }>`
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(5)}`};
  text-transform: none; /* follow design: Sentence case */
  font-size: ${({ theme }) => theme.fontSizes.base};
  font-weight: 600;

  ${({ $variant }) =>
    $variant === 'contained'
      ? containedStyles
      : $variant === 'outlined'
      ? outlinedStyles
      : textStyles};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.textMuted};
    border-color: ${({ theme }) => theme.colors.border};
  }
`;

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  disabled = false,
  children,
  ...props
}) => {
  return (
    <StyledButton $variant={variant} variant={variant} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
