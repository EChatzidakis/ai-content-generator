'use client';
import React from 'react';
import { NewConversation } from '@/components/NewConversation/NewConversation';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { SidebarButton } from '@/components/Sidebar/SidebarButton';

const Home: React.FC = () => {
  return (
    <>
      <SidebarButton />
      <Sidebar />
      <NewConversation />
    </>
  );
};

export default Home;
