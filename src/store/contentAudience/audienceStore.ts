import { create } from 'zustand';
import { onGetAllAudiences } from '@/services/api/contentAudience/contentAudienceApiCalls';
import { ContentAudience } from '@/types/content';

type State = {
  audiences: ContentAudience[];
  loading: boolean;
  error: boolean;
  fetchAudiences: () => Promise<void>;
  clearAudiences: () => void;
};

export const useAudienceStore = create<State>((set) => ({
  audiences: [],
  loading: false,
  error: false,

  fetchAudiences: async () => {
    set({ loading: true, error: false });
    try {
      const data = await onGetAllAudiences();
      set({ audiences: data, loading: false });
    } catch (err: unknown) {
      console.error('Error fetching audiences:', err);
      set({
        error: true,
        loading: false
      });
    }
  },

  clearAudiences: () => set({ audiences: [] })
}));
