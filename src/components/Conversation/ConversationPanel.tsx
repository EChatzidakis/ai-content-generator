import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useConversationStore, useStreamStore } from '@/store';
import { Message } from '@/types/conversation';
import { ConversationMessage } from './ConversationMessage';
import { useThrottledValue } from '@/hooks/useThrottledValue';

const ConversationPanelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  padding: 55px 16px 16px 16px;
  width: 100%;
`;

const MessagesWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;

  & > li {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
`;

const ConversationPanelComponent: React.FC = () => {
  const { assistantReply } = useStreamStore();
  const { activeConversation } = useConversationStore();

  // Throttle the stream to ~15 frames per second for smooth UI updates
  const smoothReply = useThrottledValue(assistantReply, 15);

  const messages = useMemo<Message[]>(() => {
    const base = activeConversation?.messages ?? [];

    if (!smoothReply) return base;

    return [
      ...base,
      {
        id: 'streaming',
        role: 'assistant',
        content: smoothReply,
        timestamp: ''
      } as Message
    ];
  }, [activeConversation?.messages, smoothReply]);

  return (
    <ConversationPanelWrapper>
      <MessagesWrapper role="list">
        {messages.map((message) => (
          <ConversationMessage key={message.id} message={message} />
        ))}
      </MessagesWrapper>
    </ConversationPanelWrapper>
  );
};

export const ConversationPanel = ConversationPanelComponent;
