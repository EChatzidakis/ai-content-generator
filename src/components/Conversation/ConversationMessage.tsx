import React from 'react';
import styled, { css } from 'styled-components';
import { Message } from '@/types/conversation';
import { MarkdownMessage } from '@/components/Message/MarkdownMessage';

interface BubbleProps {
  $isUser: boolean;
}

const MessageRow = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  max-width: 768px;

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing(3)};
  }
`;

const MessageBubble = styled.div<BubbleProps>`
  ${({ theme, $isUser }) => css`
    max-width: 60%;
    padding: ${theme.spacing(3)} ${theme.spacing(4)};
    border-radius: ${theme.borderRadius};
    line-height: 1.45;
    word-wrap: break-word;
    transition: background-color 120ms ease;

    /* palette swap based on role */
    align-self: ${$isUser ? 'flex-end' : 'flex-start'};
    background: ${$isUser ? theme.colors.primary : theme.colors.surface};
    color: ${$isUser ? theme.colors.background : theme.colors.text};

    /* speech‑bubble tail */
    ${$isUser
      ? `border-bottom-right-radius: 0.15rem;`
      : `border-bottom-left-radius: 0.15rem;`}

    /* Markdown elements inherit bubble typography */
    h1, h2, h3, h4, h5, h6 {
      font-weight: 600;
      line-height: 1.25;
      margin: 0 0 ${theme.spacing(2)} 0;
    }
    pre {
      background: ${theme.colors.hover};
      padding: ${theme.spacing(2)};
      border-radius: ${theme.borderRadius};
    }
  `}
`;

type ConversationMessageProps = {
  message: Message;
};

const ConversationMessageComponent: React.FC<ConversationMessageProps> = ({
  message
}) => (
  <MessageRow role="listitem">
    <MessageBubble $isUser={message.role === 'user'}>
      <MarkdownMessage>{message.content}</MarkdownMessage>
    </MessageBubble>
  </MessageRow>
);

export const ConversationMessage = React.memo(ConversationMessageComponent);
