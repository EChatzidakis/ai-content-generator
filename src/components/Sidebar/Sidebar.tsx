'use client';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Drawer } from '../UI';
import { ConversationList } from '../ConversationList/ConversationList';
import { useAuthStore, useLayoutStore } from '@/store';
import { SidebarButton } from './SidebarButton';

const DrawerContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  padding: 16px 0;
`;

const DrawerTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0 16px;
  border-bottom: 1px solid #e0e0e0;
`;


const SidebarComponent: React.FC = () => {
  const { isLoggedIn } = useAuthStore();
  const { isSidebarOpen, toggleSidebar, setIsSidebarOpen } = useLayoutStore();

  useEffect(() => {
    setIsSidebarOpen(isLoggedIn);
  }, [isLoggedIn, setIsSidebarOpen]);

  const handleToggleSidebar = () => toggleSidebar();

  const sidebarStyles = {
    width: isSidebarOpen ? 240 : 0,
    height: '100%',
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: isSidebarOpen ? 240 : 0,
      height: '100%',
      boxSizing: 'border-box',
      position: 'relative' // Disable fixed positioning
    }
  };

  return (
    <>
      {isLoggedIn ?? <SidebarButton />}
      <Drawer
        open={isSidebarOpen}
        onClose={handleToggleSidebar}
        anchor="left"
        hideBackdrop
        variant="persistent"
        sx={sidebarStyles}
      >
        <DrawerContentsWrapper>
          <DrawerTitleWrapper>
            <button onClick={handleToggleSidebar}>Close</button>
          </DrawerTitleWrapper>
          <ConversationList />
        </DrawerContentsWrapper>
      </Drawer>
    </>
  );
};

export const Sidebar = SidebarComponent;
