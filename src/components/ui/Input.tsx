'use client';
import React from 'react';
import styled from 'styled-components';
import TextField, { TextFieldProps } from '@mui/material/TextField';

/**
 * Theme-aware input built on MUI TextField (outlined variant).
 * Applies design-system colours, radius, and typography.
 */
const StyledTextField = styled(TextField)`
  width: 100%;
  /* Label */
  & .MuiInputLabel-root {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSubtle || theme.colors.text};
  }
  & .MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.colors.primary};
  }

  /* Outlined input */
  & .MuiOutlinedInput-root {
    border-radius: ${({ theme }) => theme.borderRadius};
    background-color: ${({ theme }) => theme.colors.surface};
    font-size: ${({ theme }) => theme.fontSizes.base};

    fieldset {
      border-color: ${({ theme }) => theme.colors.border};
      transition: border-color 0.2s ease;
    }
    &:hover fieldset {
      border-color: ${({ theme }) => theme.colors.primary};
    }
    &.Mui-focused fieldset {
      border-color: ${({ theme }) => theme.colors.primary};
      border-width: 2px;
    }
  }
`;

const Input: React.FC<TextFieldProps> = (props) => (
  <StyledTextField variant="outlined" {...props} />
);

export default Input;
