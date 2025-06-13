'use client';
import { Card as MuiCard, CardContent, CardProps } from '@mui/material';

const Card = ({ children, ...props }: CardProps) => (
  <MuiCard {...props}>
    <CardContent>{children}</CardContent>
  </MuiCard>
);

export default Card;