import { useEffect, useRef } from 'react';
import { BASE_URL } from '@/config/base';
import { useConversationStore } from '@/store';
import { Message } from '@/types/conversation';

type WebSocketPayload = {
  type: 'new-message' | 'title-update';
  conversationId: string;
  message: Message;
  title?: string;
};

export function useConversationWebSocket(conversationId: string) {
  const {
    updateConversationMessage,
    updateConversationTitle
  } = useConversationStore();

  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(BASE_URL);
    socketRef.current = socket;

    socket.onopen = () => {
      socket.send(JSON.stringify({ type: 'subscribe', conversationId }));
    };

    socket.onmessage = (event) => {
      const data: WebSocketPayload = JSON.parse(event.data);
      const { type, conversationId, message, title } = data;

      switch (type) {
        case 'new-message':
          if (message) {
            updateConversationMessage(conversationId, message);
          }
          break;

        case 'title-update':
          if (title) {
            updateConversationTitle(conversationId, title);
          }
          break;

        default:
          console.warn('Unhandled WebSocket message type:', type);
      }
    };

    return () => {
      socket.close();
    };
  }, [conversationId, updateConversationMessage, updateConversationTitle]);

  return socketRef;
}
