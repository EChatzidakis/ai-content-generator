import { create } from 'zustand';
import {
  onEvaluatePrompt,
  onPromptSubmit
} from '@/services/api/conversation/conversationApiCalls';
import { Conversation, PromptSettingsDTO } from '@/types/conversation';

type State = {
  conversations: Conversation[];
  conversationLoading: boolean;
  conversationError: { hasError: boolean; reason: string };

  submitPrompt: (promptSettings: PromptSettingsDTO) => Promise<void>;
  clearConversationState: () => void;
  clearConversationError: () => void;
};

export const useConversationStore = create<State>((set) => ({
  conversations: [],
  conversationLoading: false,
  conversationError: { hasError: false, reason: '' },

  submitPrompt: async (promptSettings: PromptSettingsDTO) => {
    set({ conversationLoading: true });
    try {
      const responseEval = await onEvaluatePrompt(promptSettings);
      if (!responseEval.ethical || !responseEval.relevant) {
        set({
          conversationError: { hasError: true, reason: responseEval.reason }
        });
        throw new Error(responseEval.reason || 'Prompt failed evaluation.');
      }

      const response = await onPromptSubmit(promptSettings);
      set((state) => ({
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
  clearConversationState: () =>
    set({
      conversations: [],
      conversationError: { hasError: false, reason: '' },
      conversationLoading: false
    }),
  clearConversationError: () =>
    set({ conversationError: { hasError: false, reason: '' } })
}));
