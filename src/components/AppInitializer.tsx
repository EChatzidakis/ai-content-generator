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
import { useRouter } from 'next/navigation';

const AppInitializer = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();
  const { fetchCategories } = useCategoryStore();
  const { fetchAudiences } = useAudienceStore();
  const { fetchTones } = useToneStore();
  const { fetchTypes } = useTypeStore();
  const { fetchFormats } = useFormatStore();
  const { activeConversationId, getConversations } = useConversationStore();

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

  const handleRedirectToConversation = useCallback(() => {
    if (activeConversationId) {
      router.push(`/conv/${activeConversationId}`);
    }
  }, [activeConversationId, router]);

  useEffect(() => {
    if (isLoggedIn) {
      handleRedirectToConversation();
    }
  }, [isLoggedIn, handleRedirectToConversation]);
  
  return null;
};

export default AppInitializer;
