'use client';
import React from 'react';
import styled from 'styled-components';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  /**
   * Optional prop to force the accordion to render its details with an
   * alternate background—for example, when nested in highlighted areas.
   */
  variant?: 'default' | 'subtle';
}

const StyledAccordion = styled(MuiAccordion)`
  background-color: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: none; /* flatten the MUI elevation */

  /* Remove the MUI pseudo-element divider */
  &::before {
    display: none;
  }
`;

const StyledAccordionSummary = styled(MuiAccordionSummary)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text};
  padding: 0 ${({ theme }) => theme.spacing(4)};
  min-height: ${({ theme }) => theme.spacing(10)}; /* 40 px */

  .MuiAccordionSummary-expandIconWrapper {
    color: ${({ theme }) => theme.colors.textSubtle || theme.colors.text};
  }
`;

const StyledAccordionDetails = styled(MuiAccordionDetails)<{ $variant: 'default' | 'subtle' }>`
  padding: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme, $variant }) =>
    $variant === 'subtle' ? theme.colors.surfaceAlt || theme.colors.surface : 'transparent'};
`;

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultExpanded = false,
  variant = 'default',
}) => (
  <StyledAccordion disableGutters defaultExpanded={defaultExpanded}>
    <StyledAccordionSummary expandIcon={<ExpandMoreIcon />}>
      {title}
    </StyledAccordionSummary>
    <StyledAccordionDetails $variant={variant}>{children}</StyledAccordionDetails>
  </StyledAccordion>
);

export default Accordion;
