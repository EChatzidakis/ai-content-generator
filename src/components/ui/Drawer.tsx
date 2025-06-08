import React from 'react';
import MuiDrawer from '@mui/material/Drawer';
import { DrawerProps } from '@mui/material/Drawer';

const DrawerComponent: React.FC<DrawerProps> = ({
  open = true,
  children,
  ...props
}) => {
  return (
    <MuiDrawer open={open} {...props}>
      {children}
    </MuiDrawer>
  );
};

export const Drawer = DrawerComponent;
