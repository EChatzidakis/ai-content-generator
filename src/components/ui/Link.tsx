import React from 'react';

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
  return <a href={href} className='link'>{children}</a>;
};

export default Link;
