'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';
import { List } from '../UI';
import { ListItemProps } from '../UI/List';
import { useConversationStore } from '@/store';
import { useConversationTitlesWebSocket } from '@/lib/websocket/useConversationTitlesWebSocket';

const ConversationListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`;

const ConversationListComponent: React.FC = () => {
  const router = useRouter();
  const { conversations, setActiveConversationId } = useConversationStore();

  // implement WebSocket for real-time updates on the titles of the active conversation
  useConversationTitlesWebSocket();

  const conversationItems: ListItemProps[] = conversations.map(
    (conversation) => ({
      value: conversation.id,
      label: conversation.title
    })
  );

  const handleItemClick = (conversationId: string) => {
    setActiveConversationId(conversationId);
    router.push(`/conv/${conversationId}`);
  };

  return (
    <ConversationListWrapper>
      <List listItems={conversationItems} onItemClick={handleItemClick} />
    </ConversationListWrapper>
  );
};

export const ConversationList = ConversationListComponent;
