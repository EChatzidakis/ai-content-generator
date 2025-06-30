'use client';
import React, { FormEventHandler, ReactNode } from 'react';
import styled from 'styled-components';

/**
 * Keep it simple: theme-aware <form> without MUI Box generics drama.
 */
export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  gap?: number;
}

const StyledForm = styled.form<{ $gap: number }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme, $gap }) => theme.spacing($gap)};
  width: 100%;
`;

const Form: React.FC<FormProps> = ({ children, onSubmit, gap = 4, ...props }) => (
  <StyledForm noValidate onSubmit={onSubmit as FormEventHandler<HTMLFormElement>} $gap={gap} {...props}>
    {children}
  </StyledForm>
);

export default Form;
