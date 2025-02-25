import React from 'react';

interface ChatBubbleProps {
  content: string;
  isUser: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ content, isUser }) => {
  const chatClass = isUser ? 'chat-end' : 'chat-start';
  return (
      <div className={`chat ${chatClass}`}>
        <div className="chat-bubble">
          {content}
        </div>
      </div>
  );
};

export default ChatBubble;
