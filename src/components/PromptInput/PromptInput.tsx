'use client';
import React from 'react';
import styled from 'styled-components';
import { Button, Textarea } from '@/components/UI';
import SendIcon from '@mui/icons-material/Send';

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 850px;
  width: 100%;
  gap: 16px;
  padding: 0 16px 16px 16px;
`;

export interface PromptInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  placeholder?: string;
  rows?: number;
}

const PromptInputComponent: React.FC<PromptInputProps> = ({
  value,
  onChange,
  onSubmit,
  placeholder = 'Your prompt...',
  rows = 4
}) => {
  return (
    <FlexWrapper>
      <Textarea
        id="main-prompt"
        rows={rows}
        placeholder={placeholder}
        sx={{
          backgroundColor: '#ffffff',
          '& .MuiInputBase-root': {
            backgroundColor: '#ffffff'
          }
        }}
        value={value}
        onChange={onChange}
        fullWidth
      />
      <Button onClick={onSubmit} className="shrink-0">
        <SendIcon />
      </Button>
    </FlexWrapper>
  );
};

export const PromptInput = PromptInputComponent;
