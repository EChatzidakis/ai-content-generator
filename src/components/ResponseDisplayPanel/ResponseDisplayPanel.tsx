'use client';
import React from 'react';
import styled from 'styled-components';

const PanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 50%;
  height: 100%;
  padding: 16px;
  
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

const ResponseDisplayPanelComponent: React.FC = () => {
  return (
    <PanelWrapper>
      <h2>Responses</h2>
      <p>ToDo</p>
      {/* Add your prompt settings components here */}
    </PanelWrapper>
  );
};

export const ResponseDisplayPanel = ResponseDisplayPanelComponent;