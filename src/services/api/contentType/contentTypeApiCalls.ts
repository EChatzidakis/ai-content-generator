import apiClient from '../apiClient';
import apiUrls from '../apiUrl';
import { ContentType } from '@/types/content';

const onGetAllTypes = async (): Promise<ContentType[]> => apiClient.get(apiUrls.types).then((response) => {
  if (response.status === 200) {
    const data = response.data;
    return data;
  }
}).catch((error) => {
  console.error('Error fetching types:', error);
  throw error;
});

export {
  onGetAllTypes
};