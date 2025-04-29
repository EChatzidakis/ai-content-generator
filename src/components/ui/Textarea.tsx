import React from 'react';
import { TextFieldProps } from '@mui/material/TextField';
import TextField from '@mui/material/TextField';

const TextareaComponent: React.FC<TextFieldProps> = (props) => {

  return (
    <TextField {...props} />
  );
};

export const Textarea = TextareaComponent;
