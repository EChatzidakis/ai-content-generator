import URL from 'url-parse';

export const BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ??
  (typeof window !== 'undefined' ? new URL(window.location.href).origin : 'http://localhost:3000');

