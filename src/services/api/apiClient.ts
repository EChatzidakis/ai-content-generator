import axios from 'axios';
import { BASE_URL } from '@/config/base';
import queryString from 'query-string';

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 120000,
  paramsSerializer: (params) => queryString.stringify(params),
  headers: {
    'AI-Content-Generator': '0.1.0',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  withCredentials: true
});

export default apiClient;
