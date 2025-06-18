'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Textarea } from '@/components/UI';
import SendIcon from '@mui/icons-material/Send';
import { useConversationStore } from '@/store';

const ConversationPageWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 100%;
  padding: 16px;
  overflow-y: auto;

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
  margin-top: 16px;
  width: 100%;
  gap: 16px;
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
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Conversation Component</h1>
        <p className="mt-4">
          This is where conversation details will be displayed.
        </p>
      </div>
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
