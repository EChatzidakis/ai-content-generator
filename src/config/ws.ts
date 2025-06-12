// src/config/ws.ts
const isDev = process.env.NODE_ENV === 'development';

export const WS_CONVO_URL = isDev
  ? 'ws://localhost:3000/ws/conversation-titles'
  : `wss://${process.env.NEXT_PUBLIC_VERCEL_URL}/ws/conversation-titles`;
