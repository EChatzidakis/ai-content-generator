import { WebSocket } from 'ws';

export interface ClientMeta {
  socket: WebSocket;
  userId: string;
}

export type MessageAddedPayload = {
  type: 'message-added';
  data: {
    conversationId: string;
    message: {
      id: string;
      role: string;
      content: string;
      timestamp: string;
    };
  };
};

export type ConversationUpdatedPayload = {
  type: 'conversation-updated';
  data: {
    conversationId: string;
    updatedFields: Partial<{
      title: string;
      updatedAt: string;
    }>;
  };
};

export type BroadcastPayload =
  | MessageAddedPayload
  | ConversationUpdatedPayload;
