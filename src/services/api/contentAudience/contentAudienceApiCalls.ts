import apiClient from '../apiClient';
import apiUrls from '../apiUrl';
import { ContentAudience } from '@/types/content';

const onGetAllAudiences = async (): Promise<ContentAudience[]> => apiClient.get(apiUrls.audiences).then((response) => {
  if (response.status === 200) {
    const data = response.data;
    return data;
  }
}).catch((error) => {
  console.error('Error fetching audiences:', error);
  throw error;
});

export {
  onGetAllAudiences
};