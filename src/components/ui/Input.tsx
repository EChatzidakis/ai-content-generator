import React from 'react';
import { TextFieldProps } from '@mui/material/TextField';
import TextField from '@mui/material/TextField';

const Input: React.FC<TextFieldProps> = (props) => {
  return <TextField fullWidth variant="outlined" {...props} />;
};

export default Input;
