'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Accordion, Button, Form, Textarea } from '@/components/UI';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { PromptSettingsFields } from './PromptSettingsFields';
import {
  useAudienceStore,
  useCategoryStore,
  useFormatStore,
  useToneStore,
  useTypeStore,
  useConversationStore
} from '@/store';
import { PromptSettingsDTO } from '@/types/conversation';

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 50%;
  height: 100%;
  padding: 16px;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  width: 100%;
`;

const PromptSettingsPanelComponent: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedAudience, setSelectedAudience] = useState<string>('');
  const [selectedTone, setSelectedTone] = useState<string>('');
  const [selectedFormat, setSelectedFormat] = useState<string>('');
  const [userPrompt, setUserPrompt] = useState<string>('');

  const { fetchCategories } = useCategoryStore();
  const { fetchAudiences } = useAudienceStore();
  const { fetchTones } = useToneStore();
  const { fetchTypes } = useTypeStore();
  const { fetchFormats } = useFormatStore();
  const { submitPrompt } = useConversationStore();

  useEffect(() => {
    handleFetchPromptSettings();
  }, []);

  const handleFetchPromptSettings = () => {
    fetchCategories();
    fetchAudiences();
    fetchTones();
    fetchFormats();
    fetchTypes();
  };

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
      <h2>Prompt Settings</h2>
      <p>Configure your prompt settings here.</p>
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
            <ArrowUpwardIcon />
          </Button>
        </FlexWrapper>
      </Form>
    </PanelWrapper>
  );
};

export const PromptSettingsPanel = PromptSettingsPanelComponent;
