'use client';
import { Card as MuiCard, CardContent as MuiCardContent, CardProps } from '@mui/material';
import styled from 'styled-components';

const StyledCard = styled(MuiCard)`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: none;
`;

const StyledCardContent = styled(MuiCardContent)`
  padding: ${({ theme }) => theme.spacing(4)};
`;

const Card = ({ children, ...props }: CardProps) => (
  <StyledCard {...props}>
    <StyledCardContent>{children}</StyledCardContent>
  </StyledCard>
);

export default Card;
