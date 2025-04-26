import React, { useState, MouseEvent } from 'react';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface DropdownProps {
  children: React.ReactNode;
  listItems: { label: React.ReactNode; onClick?: () => void }[];
}

const Menu: React.FC<DropdownProps> = ({ children, listItems }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <span onClick={handleOpen} style={{ cursor: 'pointer', display: 'inline-block' }}>
        {children}
      </span>
      <MuiMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {listItems.map((item, idx) => (
          <MenuItem
            key={idx}
            onClick={() => {
              handleClose();
              item.onClick?.();
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </MuiMenu>
    </>
  );
};

export default Menu;