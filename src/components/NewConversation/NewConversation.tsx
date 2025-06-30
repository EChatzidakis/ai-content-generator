'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Accordion, Button, Form, Textarea } from '@/components/UI';
import SendIcon from '@mui/icons-material/Send';
import { PromptSettingsFields } from './PromptSettingsFields';
import { useConversationStore } from '@/store';
import { PromptSettingsDTO } from '@/types/conversation';

const PanelWrapper = styled.div`
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

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 650px;
  min-width: 300px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  width: 100%;
  gap: 16px;
`;

const NewConversationComponent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedAudience, setSelectedAudience] = useState<string>('');
  const [selectedTone, setSelectedTone] = useState<string>('');
  const [selectedFormat, setSelectedFormat] = useState<string>('');
  const [userPrompt, setUserPrompt] = useState<string>('');

  const { submitPrompt } = useConversationStore();

  const handleSetUserPrompt = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setUserPrompt(event.target.value);

  const handleSubmit = () => {
    const payload: PromptSettingsDTO = {
      category: selectedCategory,
      type: selectedType,
      tone: selectedTone,
      audience: selectedAudience,
      format: selectedFormat,
      userInput: userPrompt
    };

    submitPrompt(payload);
  };

  return (
    <PanelWrapper>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          <Accordion title="Prompt Settings" defaultExpanded={false}>
            <PromptSettingsFields
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedType={selectedType}
              setSelectedType={setSelectedType}
              selectedAudience={selectedAudience}
              setSelectedAudience={setSelectedAudience}
              selectedTone={selectedTone}
              setSelectedTone={setSelectedTone}
              selectedFormat={selectedFormat}
              setSelectedFormat={setSelectedFormat}
            />
          </Accordion>
          <FlexWrapper>
            <Textarea
              id="main-prompt"
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
        </Form>
      </FormWrapper>
    </PanelWrapper>
  );
};

export const NewConversation = NewConversationComponent;
