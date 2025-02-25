import React from 'react';

interface MenuProps {
  children: React.ReactNode;
}

const Menu: React.FC<MenuProps> = ({ children }) => {
  return (
    <ul className="menu w-56 rounded-box bg-base-200">
      {children}
    </ul>
  );
};

export default Menu;