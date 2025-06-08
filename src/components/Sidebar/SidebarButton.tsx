'use client';
import React from 'react';
import styled from 'styled-components';
import { useLayoutStore } from '@/store';

const SidebarButtonWrapper = styled.div`
  position: fixed;
  left: 16px;
  top: 100px;
  z-index: 1000;
`;

const SidebarButtonComponent: React.FC = () => {
  const { toggleSidebar } = useLayoutStore();

  return (
    <SidebarButtonWrapper>
      <button onClick={toggleSidebar}>
        Open Sidebar
      </button>
    </SidebarButtonWrapper>
  );
};

export const SidebarButton = React.memo(SidebarButtonComponent);
