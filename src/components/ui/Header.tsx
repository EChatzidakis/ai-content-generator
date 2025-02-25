import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  handleRenderAvatar: () => React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ handleRenderAvatar }) => {  

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          LexiGen
        </Link>
      </div>
      {handleRenderAvatar()}
    </div>
  );
};

export default Header;
