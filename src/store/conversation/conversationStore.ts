import { create } from 'zustand';
import {
  onEvaluatePrompt,
  onPromptSubmit,
  onGetConversations
} from '@/services/api/conversation/conversationApiCalls';
import { Conversation, Message, PromptSettingsDTO } from '@/types/conversation';

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
    set(({ conversations }) => ({
      conversations: conversations.map((conversation) => {
        if (conversation.id !== conversationId) {
          return conversation;
        }

        return {
          ...conversation,
          messages: [...conversation.messages, newMessage]
        };
      })
    }));
  },
  updateConversationTitle: (conversationId, newTitle) => {
    set((state) => ({
      conversations: state.conversations.map((conv) =>
        conv.id === conversationId ? { ...conv, title: newTitle } : conv
      )
    }));
  }
}));
