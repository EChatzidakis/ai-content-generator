'use client';
import React from "react";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({
  title,
  children,
  defaultExpanded = false,
}) => (
  <MuiAccordion defaultExpanded={defaultExpanded}>
    <MuiAccordionSummary expandIcon={<ExpandMoreIcon />}>
      {title}
    </MuiAccordionSummary>
    <MuiAccordionDetails>{children}</MuiAccordionDetails>
  </MuiAccordion>
);

export default Accordion;