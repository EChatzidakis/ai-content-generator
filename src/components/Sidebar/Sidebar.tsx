import React from 'react';
import styled from 'styled-components';
import { Drawer } from '../UI';
import { ConversationList } from '../ConversationList/ConversationList';
import { useLayoutStore } from '@/store';

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
  const { isSidebarOpen, toggleSidebar } = useLayoutStore();

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
          <button onClick={handleToggleSidebar}>
            Close
          </button>
        </DrawerTitleWrapper>
        <ConversationList />
      </DrawerContentsWrapper>
    </Drawer>
  );
};

export const Sidebar = SidebarComponent;
