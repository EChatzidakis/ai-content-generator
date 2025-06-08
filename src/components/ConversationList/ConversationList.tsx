import React, { useEffect } from 'react';
import styled from 'styled-components';
import { List } from '../UI';
import { ListItemProps } from '../UI/List';
import { useConversationStore } from '@/store';

const ConversationListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
`;

const ConversationListComponent: React.FC = () => {
  const { getConversations, setActiveConversationId, conversations } =
    useConversationStore();

  useEffect(() => {
    getConversations();
  }, [getConversations]);

  const conversationItems: ListItemProps[] = conversations.map(
    (conversation) => ({
      value: conversation.id,
      label: conversation.title
    })
  );

  const handleItemClick = (value: string) => {
    setActiveConversationId(value);
  };

  return (
    <ConversationListWrapper>
      <List listItems={conversationItems} onItemClick={handleItemClick} />
    </ConversationListWrapper>
  );
};

export const ConversationList = ConversationListComponent;
