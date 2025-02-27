import React from 'react';

interface DropdownProps {
  children: React.ReactNode;
  listItems: React.ReactNode[];
}

const Dropdown: React.FC<DropdownProps> = ({ children, listItems }) => {
  const options = listItems.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost">
        {children}
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow-md"
      >
        {options}
      </ul>
    </div>
  );
};

export default Dropdown;
