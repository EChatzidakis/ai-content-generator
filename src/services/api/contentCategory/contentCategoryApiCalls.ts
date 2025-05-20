import apiClient from '../apiClient';
import apiUrls from '../apiUrl';
import { ContentCategory } from '@/types/content';

const onGetAllCategories = async (): Promise<ContentCategory[]> => apiClient.get(apiUrls.categories).then((response) => {
  if (response.status === 200) {
    const data = response.data;
    return data;
  }
}).catch((error) => {
  console.error('Error fetching categories:', error);
  throw error;
});

export {
  onGetAllCategories
};