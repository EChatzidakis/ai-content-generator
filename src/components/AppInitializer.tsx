'use client';
import { useCallback, useEffect } from 'react';
import {
  useAuthStore,
  useAudienceStore,
  useCategoryStore,
  useFormatStore,
  useToneStore,
  useTypeStore,
  useConversationStore
} from '@/store';

const AppInitializer = () => {
  const { isLoggedIn } = useAuthStore();
  const { fetchCategories } = useCategoryStore();
  const { fetchAudiences } = useAudienceStore();
  const { fetchTones } = useToneStore();
  const { fetchTypes } = useTypeStore();
  const { fetchFormats } = useFormatStore();
  const { getConversations } = useConversationStore();

  const handleFetchPromptSettings = useCallback(() => {
    fetchCategories();
    fetchAudiences();
    fetchTones();
    fetchFormats();
    fetchTypes();
    getConversations();
  }, [
    fetchCategories,
    fetchAudiences,
    fetchTones,
    fetchFormats,
    fetchTypes,
    getConversations
  ]);

  useEffect(() => {
    if (isLoggedIn) {
      handleFetchPromptSettings();
    }
  }, [isLoggedIn, handleFetchPromptSettings]);

  return null;
};

export default AppInitializer;
