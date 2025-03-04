import React from 'react';

interface DividerProps {
  isHorizontal?: boolean;
  text?: string;
}

const Divider: React.FC<DividerProps> = ({ isHorizontal, text = '' }) => {
  const classNames = isHorizontal ? 'divider-horizontal' : '';
  return (
      <div className={`divider ${classNames}`}>{text}</div>
  );
};

export default Divider;
