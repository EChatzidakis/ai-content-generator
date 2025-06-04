import { create } from 'zustand';
import { onGetAllTones } from '@/services/api/contentTone/contentToneApiCalls';
import { ContentTone } from '@/types/content';

type State = {
  tones: ContentTone[];
  loading: boolean;
  error: boolean;
  fetchTones: () => Promise<void>;
  clearTones: () => void;
};

export const useToneStore = create<State>((set) => ({
  tones: [],
  loading: false,
  error: false,

  fetchTones: async () => {
    set({ loading: true, error: false });
    try {
      const data = await onGetAllTones();
      set({ tones: data, loading: false });
    } catch (err: unknown) {
      console.error('Error fetching tones:', err);
      set({
        error: true,
        loading: false
      });
    }
  },

  clearTones: () => set({ tones: [] })
}));
