import React from 'react';

interface TooltipProps {
  children: React.ReactNode;
  direction?: 'top' | 'right' | 'bottom' | 'left';
  text: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, direction, text }) => {
  const TOOLTIP_DIRECTION_CLASSES = {
    top: 'tooltip-top',
    right: 'tooltip-right',
    bottom: 'tooltip-bottom',
    left: 'tooltip-left'
  };  
  const directionClassName = direction ? TOOLTIP_DIRECTION_CLASSES[direction] : '';
  const tooltipClassNames = `tooltip ${directionClassName}`;

  return (
    <div className={tooltipClassNames} data-tip={text}>
      {children}
    </div>
  );
};

export default Tooltip;