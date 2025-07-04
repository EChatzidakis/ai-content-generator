import apiClient from '../apiClient';
import apiUrls from '../apiUrl';
import {
  Conversation,
  PromptEval,
  PromptSettingsDTO
} from '@/types/conversation';

const onEvaluatePrompt = async (
  promptSettings: PromptSettingsDTO
): Promise<PromptEval> =>
  apiClient
    .post(apiUrls.evaluate, promptSettings)
    .then((response) => {
      if (response.status === 200) {
        const { data } = response;
        return data;
      }
    })
    .catch((error) => {
      console.error('Error validating prompt: ', error);
      throw error;
    });

const onPromptSubmit = async (
  promptSettings: PromptSettingsDTO
): Promise<Conversation> =>
  apiClient
    .post(apiUrls.conversation, promptSettings)
    .then((response) => {
      if (response.status === 200) {
        const { data } = response;
        return data;
      }
    })
    .catch((error) => {
      console.error('Error validating prompt: ', error);
      throw error;
    });

// Conversation Model API calls

const onGetConversations = async (): Promise<Conversation[]> =>
  apiClient
    .get(apiUrls.conversation)
    .then((response) => {
      if (response.status === 200) {
        const { data } = response;
        return data;
      }
    })
    .catch((error) => {
      console.error('Error validating prompt: ', error);
      throw error;
    });

const onGetConversationsById = async (
  conversationId: string
): Promise<Conversation> =>
  apiClient
    .get(`${apiUrls.conversation}/${conversationId}`)
    .then((response) => {
      if (response.status === 200) {
        const { data } = response;
        return data;
      }
    })
    .catch((error) => {
      console.error('Error fetching conversation by ID: ', error);
      throw error;
    });

export {
  onEvaluatePrompt,
  onPromptSubmit,
  onGetConversations,
  onGetConversationsById
};
