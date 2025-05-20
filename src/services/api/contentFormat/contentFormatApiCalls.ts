import apiClient from '../apiClient';
import apiUrls from '../apiUrl';
import { ContentFormat } from '@/types/content';

const onGetAllFormats = async (): Promise<ContentFormat[]> => apiClient.get(apiUrls.formats).then((response) => {
  if (response.status === 200) {
    const data = response.data;
    return data;
  }
}).catch((error) => {
  console.error('Error fetching formats:', error);
  throw error;
});

export {
  onGetAllFormats
};