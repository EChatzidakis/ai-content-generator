import React, { use } from 'react';
import { Conversation } from '@/components/Conversation/Conversation';

type ConversationPageProps = {
  params: Promise<{ id: string }>;
};

const ConversationPage: React.FC<ConversationPageProps> = ({ params }) => {
  const { id } = use(params);
  console.log('Conversation ID:', id);

  return (
    <>
      <Conversation />
    </>
  );
};

export default ConversationPage;
