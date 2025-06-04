import { create } from 'zustand';
import { onGetAllTypes } from '@/services/api/contentType/contentTypeApiCalls';
import { ContentType } from '@/types/content';

type State = {
  types: ContentType[];
  loading: boolean;
  error: boolean;
  fetchTypes: () => Promise<void>;
  clearTypes: () => void;
};

export const useTypeStore = create<State>((set) => ({
  types: [],
  loading: false,
  error: false,

  fetchTypes: async () => {
    set({ loading: true, error: false });
    try {
      const data = await onGetAllTypes();
      set({ types: data, loading: false });
    } catch (err: unknown) {
      console.error('Error fetching types:', err);
      set({
        error: true,
        loading: false
      });
    }
  },

  clearTypes: () => set({ types: [] })
}));
