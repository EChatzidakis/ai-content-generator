'use client';
import React from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

const Button: React.FC<ButtonProps> = ({
  variant = 'contained',
  disabled = false,
  children,
  ...props
}) => {
  return (
    <MuiButton variant={variant} disabled={disabled} {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
