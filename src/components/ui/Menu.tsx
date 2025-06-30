'use client';
import React, { useState, MouseEvent } from 'react';
import styled from 'styled-components';
import MuiMenu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

interface DropdownProps {
  children: React.ReactNode;
  listItems: { label: React.ReactNode; onClick?: () => void }[];
}

const StyledMenu = styled(MuiMenu)`
  /* style the underlying MUI Paper */
  & .MuiPaper-root {
    background-color: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: none; /* flatten elevation */
    padding: ${({ theme }) => theme.spacing(1)} 0; /* vertical trim */
  }
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: ${({ theme }) => theme.fontSizes.base};
  padding: ${({ theme }) => `${theme.spacing(3)} ${theme.spacing(6)}`};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

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
      <span
        onClick={handleOpen}
        style={{ cursor: 'pointer', display: 'inline-block' }}
      >
        {children}
      </span>

      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {listItems.map((item, idx) => (
          <StyledMenuItem
            key={idx}
            onClick={() => {
              handleClose();
              item.onClick?.();
            }}
          >
            {item.label}
          </StyledMenuItem>
        ))}
      </StyledMenu>
    </>
  );
};

export default Menu;
