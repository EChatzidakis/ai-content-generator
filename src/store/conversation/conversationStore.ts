import { create } from 'zustand';
import {
  onEvaluatePrompt,
  onPromptSubmit,
  onGetConversations
} from '@/services/api/conversation/conversationApiCalls';
import { Conversation, PromptSettingsDTO } from '@/types/conversation';

type State = {
  activeConversationId: string | null;
  conversations: Conversation[];
  conversationLoading: boolean;
  conversationListLoading: boolean;
  conversationError: { hasError: boolean; reason: string };

  getConversations: () => Promise<void>;
  submitPrompt: (promptSettings: PromptSettingsDTO) => Promise<void>;
  setActiveConversationId: (id: string | null) => void;
  clearConversationState: () => void;
  clearConversationError: () => void;
};

export const useConversationStore = create<State>((set) => ({
  activeConversationId: null,
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
    set({ activeConversationId: id }),

  clearConversationState: () =>
    set({
      conversations: [],
      conversationError: { hasError: false, reason: '' },
      conversationLoading: false
    }),
    
  clearConversationError: () =>
    set({ conversationError: { hasError: false, reason: '' } })
}));
