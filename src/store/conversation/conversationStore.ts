import { create } from 'zustand';
import {
  onEvaluatePrompt,
  onPromptSubmit,
  onGetConversations
} from '@/services/api/conversation/conversationApiCalls';
import { Conversation, Message, PromptSettingsDTO } from '@/types/conversation';
import { useStreamStore } from '@/store/stream/streamStore';

type ConversationStoreState = {
  activeConversationId: string | null;
  activeConversation: Conversation | null;
  conversations: Conversation[];
  conversationLoading: boolean;
  conversationListLoading: boolean;
  conversationError: { hasError: boolean; reason: string };

  getConversations: () => Promise<void>;
  submitPrompt: (promptSettings: PromptSettingsDTO) => Promise<void>;
  setActiveConversationId: (id: string | null) => void;
  clearConversationState: () => void;
  clearConversationError: () => void;

  updateConversationMessage: (conversationId: string, message: Message) => void;
  updateConversationTitle: (conversationId: string, newTitle: string) => void;
};

export const useConversationStore = create<ConversationStoreState>((set) => ({
  activeConversationId: null,
  activeConversation: null,
  conversations: [],
  conversationLoading: false,
  conversationListLoading: false,
  conversationError: { hasError: false, reason: '' },

  getConversations: async () => {
    set({ conversationListLoading: true });
    try {
      const _conversations = await onGetConversations();
      set({
        conversations: _conversations,
        conversationListLoading: false,
        conversationError: { hasError: false, reason: '' }
      });
    } catch (err: unknown) {
      console.error('Error fetching conversations:', err);
      set({
        conversationListLoading: false,
        conversationError: {
          hasError: true,
          reason: 'Error fetching conversations.'
        }
      });
    }
  },

  submitPrompt: async (promptSettings: PromptSettingsDTO) => {
    set({ conversationLoading: true });
    try {
      const responseEval = await onEvaluatePrompt(promptSettings);
      if (!responseEval.ethical) {
        set({
          conversationError: { hasError: true, reason: responseEval.reason }
        });
        throw new Error(responseEval.reason || 'Prompt failed evaluation.');
      }

      const response = await onPromptSubmit(promptSettings);
      set((state) => ({
        activeConversationId: response.id,
        activeConversation: response,
        conversationLoading: false,
        conversations: [response, ...state.conversations]
      }));

      // stream the response
      const { startStream } = useStreamStore.getState();

      startStream(response.id, (dbRow) => {
        // dbRow is the canonical Message received from `event: done`
        useConversationStore
          .getState()
          .updateConversationMessage(response.id, dbRow);
      });
    } catch (err: unknown) {
      console.error('Error on prompt submission:', err);
      set({
        conversationError: {
          hasError: true,
          reason: 'Error on prompt submission.'
        },
        conversationLoading: false
      });
    }
  },

  setActiveConversationId: (id: string | null) =>
    set((state) => ({
      activeConversationId: id,
      activeConversation: state.conversations.find((c) => c.id === id) || null
    })),

  clearConversationState: () =>
    set({
      conversations: [],
      conversationError: { hasError: false, reason: '' },
      conversationLoading: false
    }),

  clearConversationError: () =>
    set({ conversationError: { hasError: false, reason: '' } }),

  updateConversationMessage: (conversationId, newMessage) => {
    set((state) => {
      const conversations = state.conversations.map((c) =>
        c.id === conversationId
          ? { ...c, messages: [...c.messages, newMessage] }
          : c
      );

      const activeConversation =
        state.activeConversation?.id === conversationId
          ? conversations.find((c) => c.id === conversationId) || null
          : state.activeConversation;

      return { conversations, activeConversation };
    });
  },
  updateConversationTitle: (conversationId, newTitle) => {
    set((state) => ({
      conversations: state.conversations.map((conv) =>
        conv.id === conversationId ? { ...conv, title: newTitle } : conv
      )
    }));
  }
}));
