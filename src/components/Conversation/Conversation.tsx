'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useConversationStore } from '@/store';
import { ConversationPanel } from './ConversationPanel';
import { PromptInput } from '@/components/PromptInput/PromptInput';

const ConversationPageWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: auto;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
  &::-webkit-scrollbar-track:hover {
    background-color: #e0e0e0;
  }
`;

const ConversationComponent: React.FC = () => {
  const [userPrompt, setUserPrompt] = useState<string>('');
  const { activeConversationId } = useConversationStore();

  const handleSetUserPrompt = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setUserPrompt(event.target.value);

  const handleSubmit = () => {
    console.log('Submitting prompt:', userPrompt, 'for conversation ID:', activeConversationId);
  };

  return (
    <ConversationPageWrapper>
      <ConversationPanel />
      <PromptInput
        value={userPrompt}
        onChange={handleSetUserPrompt}
        onSubmit={handleSubmit}
        placeholder="Your prompt..."
        rows={4}
      />
    </ConversationPageWrapper>
  );
};

export const Conversation = ConversationComponent;
