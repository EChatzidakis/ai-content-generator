import apiClient from '../apiClient';
import apiUrls from '../apiUrl';
import { ContentTone } from '@/types/content';

const onGetAllTones = async (): Promise<ContentTone[]> => apiClient.get(apiUrls.tones).then((response) => {
  if (response.status === 200) {
    const data = response.data;
    return data;
  }
}).catch((error) => {
  console.error('Error fetching tones:', error);
  throw error;
});

export {
  onGetAllTones
};