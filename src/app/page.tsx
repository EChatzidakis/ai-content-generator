'use client';
import React from 'react';
import { PromptSettingsPanel } from '@/components/PromptSettingsPanel/PromptSettingsPanel';
import { ResponseDisplayPanel } from '@/components/ResponseDisplayPanel/ResponseDisplayPanel';
import { Divider } from '@/components/UI';

const Home: React.FC = () => {
  return (
    <>
      <PromptSettingsPanel />
      <Divider orientation="vertical" variant="middle" />
      <ResponseDisplayPanel />
    </>
  );
};

export default Home;
