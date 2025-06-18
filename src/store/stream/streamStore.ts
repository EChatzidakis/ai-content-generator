import { create } from 'zustand';
import { Message } from '@/types/conversation';
import { useConversationStore } from '@/store/conversation/conversationStore';

interface StreamState {
  assistantReply: string;
  startStream: (
    conversationId: string,
    onComplete?: (dbMessage: Message) => void
  ) => void;
  stopStream: () => void;
  eventSource: EventSource | null;
}

export const useStreamStore = create<StreamState>((set, get) => ({
  assistantReply: '',
  eventSource: null,

  startStream: (conversationId, onComplete) => {
    // Avoid opening multiple connections
    if (get().eventSource) {
      return;
    }

    const es = new EventSource(`/api/stream?conversationId=${conversationId}`);

    es.onmessage = (event) => {
      const { token } = JSON.parse(event.data);
      set((state) => ({
        assistantReply: state.assistantReply + token
      }));
    };

    es.addEventListener('title', (e) => {
      const { title } = JSON.parse(e.data);
      useConversationStore
        .getState()
        .updateConversationTitle(conversationId, title);
    });

    es.addEventListener('done', (e) => {
      const dbMessage = JSON.parse(e.data) as Message;
      es.close();
      set({ eventSource: null });
      onComplete?.(dbMessage);
    });

    es.onerror = () => {
      es.close();
      set({ eventSource: null });

      if (onComplete) {
        onComplete?.({
          id: crypto.randomUUID(), // temporary id
          role: 'assistant',
          content: get().assistantReply,
          timestamp: new Date().toISOString(),
          conversationId
        });
      }
    };

    set({ assistantReply: '', eventSource: es });
  },

  stopStream: () => {
    get().eventSource?.close();
    set({ eventSource: null });
  }
}));
