'use client';
import { useEffect, useRef } from 'react';
import { WS_CONVO_URL } from '@/config/ws';
import { useConversationStore } from '@/store';

export function useConversationTitlesWebSocket() {
  const { updateConversationTitle } = useConversationStore();
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(WS_CONVO_URL);
    socketRef.current = socket;

    // socket.onopen = () => {
    //   socket.send(JSON.stringify({ type: 'conversation-updated' }));
    // };

    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.type === 'conversation-updated') {
          const { conversationId, updatedFields } = data.data;
          if (updatedFields?.title) {
            updateConversationTitle(conversationId, updatedFields.title);
          }
        }
      } catch (err) {
        console.error('WebSocket message parse error:', err);
      }
    };

    return () => {
      socket.close(1000, 'Client closed connection');
    };
  }, [updateConversationTitle]);
}
