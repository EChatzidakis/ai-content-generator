'use client';
import React from 'react';
import { Divider as MuiDivider, DividerProps } from '@mui/material';

const Divider: React.FC<DividerProps> = ({ children, ...props }) => (
  <MuiDivider sx={{ my: 2 }} {...props}>
    {children}
  </MuiDivider>
);

export default Divider;
