import URL from 'url-parse';

export const BASE_URL =
  process.env.REACT_APP_OVERRIDE_API_URL ||
  new URL(window.location.href).origin;
