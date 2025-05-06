'use client';
import React from 'react';
import styled from 'styled-components';
import { Accordion, Textarea } from '@/components/UI';
import { PromptSettingsForm } from './PromptSettingsForm';

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 50%;
  height: 100%;
  padding: 16px;
`;

const PromptSettingsPanelComponent: React.FC = () => {
  return (
    <PanelWrapper>
      <h2>Prompt Settings</h2>
      <p>Configure your prompt settings here.</p>
      {/* Add your prompt settings components here */}
      <Accordion title="Prompt Settings" defaultExpanded={false}>
        <PromptSettingsForm />
      </Accordion>
      <Textarea
        id="main-prompt"
        multiline
        rows={4}
        placeholder="Your prompt..."
        sx={{
          backgroundColor: '#ffffff',
          '& .MuiInputBase-root': {
            backgroundColor: '#ffffff'
          }
        }}
      />
    </PanelWrapper>
  );
};

export const PromptSettingsPanel = PromptSettingsPanelComponent;
