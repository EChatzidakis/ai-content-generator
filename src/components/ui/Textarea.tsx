'use client';
import React from 'react';
import styled from 'styled-components';
import TextField, { TextFieldProps } from '@mui/material/TextField';

/**
 * Themed multiline text input built on MUI `TextField`.
 * – Always `variant="outlined"` & `multiline`
 * – Width‑100 so it stretches in our `Form` layout
 * – Pulls radius, palette & typography from `theme.ts`
 */
export type TextareaProps = Omit<TextFieldProps, 'variant' | 'multiline'> & {
  rows?: number;
};

const StyledTextarea = styled(TextField)`
  width: 100%;

  & .MuiInputLabel-root {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.textSubtle || theme.colors.text};
  }
  & .MuiInputLabel-root.Mui-focused {
    color: ${({ theme }) => theme.colors.primary};
  }

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

const Textarea: React.FC<TextareaProps> = ({ rows = 4, ...props }) => (
  <StyledTextarea variant="outlined" multiline rows={rows} {...props} />
);

export default Textarea;
