import { create } from 'zustand';
import { onGetAllFormats } from '@/services/api/contentFormat/contentFormatApiCalls';
import { ContentFormat } from '@/types/content';

type State = {
  formats: ContentFormat[];
  loading: boolean;
  error: boolean;
  fetchFormats: () => Promise<void>;
  clearFormats: () => void;
};

export const useAudienceStore = create<State>((set) => ({
  formats: [],
  loading: false,
  error: false,

  fetchFormats: async () => {
    set({ loading: true, error: false });
    try {
      const data = await onGetAllFormats();
      set({ formats: data, loading: false });
    } catch (err: unknown) {
      console.error('Error fetching formats:', err);
      set({
        error: true,
        loading: false
      });
    }
  },

  clearFormats: () => set({ formats: [] })
}));
