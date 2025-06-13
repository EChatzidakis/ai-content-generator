'use client';
import { useCallback, useEffect } from 'react';
import {
  useAudienceStore,
  useCategoryStore,
  useFormatStore,
  useToneStore,
  useTypeStore,
  useConversationStore
} from '@/store';

const AppInitializer = () => {
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
    handleFetchPromptSettings();
  }, [handleFetchPromptSettings]);

  return null;
};

export default AppInitializer;
