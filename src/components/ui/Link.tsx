import React from 'react';
import MuiLink from '@mui/material/Link';

interface LinkProps {
  children: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
  underline?: 'none' | 'hover' | 'always';
  color?: string;
}

const Link: React.FC<LinkProps> = ({
  href,
  children,
  target,
  rel,
  underline = 'hover',
  color = 'primary',
}) => {
  return (
    <MuiLink
      href={href}
      target={target}
      rel={rel}
      underline={underline}
      color={color}
    >
      {children}
    </MuiLink>
  );
};

export default Link;
