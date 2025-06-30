'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Textarea } from '@/components/UI';
import SendIcon from '@mui/icons-material/Send';
import { useConversationStore } from '@/store';
import { ConversationPanel } from './ConversationPanel';

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

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 850px;
  width: 100%;
  gap: 16px;
  padding: 0 16px 16px 16px;
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
      <FlexWrapper>
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
          value={userPrompt}
          onChange={handleSetUserPrompt}
          fullWidth
        />
        <Button onClick={handleSubmit}>
          <SendIcon />
        </Button>
      </FlexWrapper>
    </ConversationPageWrapper>
  );
};

export const Conversation = ConversationComponent;
