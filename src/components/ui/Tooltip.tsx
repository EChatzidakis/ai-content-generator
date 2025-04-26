import React from 'react';
import MuiTooltip from '@mui/material/Tooltip';

interface TooltipProps {
  children: React.ReactNode;
  title: string;
  placement?: 'top' | 'right' | 'bottom' | 'left';
}

const Tooltip: React.FC<TooltipProps> = ({ children, title, placement = 'top' }) => {
  return (
    <MuiTooltip title={title} placement={placement}>
      <span>{children}</span>
    </MuiTooltip>
  );
};

export default Tooltip;