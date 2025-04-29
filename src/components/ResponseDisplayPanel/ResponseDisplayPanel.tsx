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