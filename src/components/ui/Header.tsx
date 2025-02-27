import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {  

  return (
    <div className="navbar bg-base-100 ring">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          LexiGen
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Header;
