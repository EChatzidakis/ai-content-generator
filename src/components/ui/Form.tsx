'use client';
import { Box, BoxProps } from '@mui/material';
import { ReactNode, FormEventHandler } from 'react';

interface FormProps extends Omit<BoxProps, 'onSubmit'> {
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

const Form: React.FC<FormProps> = ({ children, onSubmit, ...props }) => {
  return (
    <Box component="form" {...props} onSubmit={onSubmit} noValidate>
      {children}
    </Box>
  );
};

export default Form;
