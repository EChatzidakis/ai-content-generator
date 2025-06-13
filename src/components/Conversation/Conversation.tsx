'use client';
import React from 'react';
import styled from 'styled-components';

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

const ConversationComponent: React.FC = () => {
  return (
    <PanelWrapper>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold">Conversation Component</h1>
        <p className="mt-4">
          This is where conversation details will be displayed.
        </p>
      </div>
    </PanelWrapper>
  );
};

export const Conversation = ConversationComponent;
