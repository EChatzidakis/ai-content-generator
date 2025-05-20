import { create } from 'zustand';
import { onGetAllCategories } from '@/services/api/contentCategory/contentCategoryApiCalls';
import { ContentCategory } from '@/types/content';

type State = {
  categories: ContentCategory[];
  loading: boolean;
  error: boolean;
  fetchCategories: () => Promise<void>;
  clearCategories: () => void;
};

export const useCategoryStore = create<State>((set) => ({
  categories: [],
  loading: false,
  error: false,

  fetchCategories: async () => {
    set({ loading: true, error: false });
    try {
      const data = await onGetAllCategories();
      set({ categories: data, loading: false });
    } catch (err: unknown) {
      console.error('Error fetching categories:', err);
      set({
        error: true,
        loading: false
      });
    }
  },

  clearCategories: () => set({ categories: [] })
}));
