'use client';

import { use, useEffect } from 'react';
import { useConversationStore } from '@/store/conversation/conversationStore';

type Props = {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
};

export default function ConversationLayout({ children, params }: Props) {
  const { id } = use(params);
  const { setActiveConversationId } = useConversationStore();

  useEffect(() => {
    setActiveConversationId(id);
    return () => {
      setActiveConversationId(null); // reset on unmount
    };
  }, [id, setActiveConversationId]);

  return <>{children}</>;
}
