import { WebSocketServer, WebSocket } from 'ws';
import type { Server, IncomingMessage } from 'http';
import { addClient, removeClient } from './broadcaster';
import { getToken } from 'next-auth/jwt';
import { getUserByProviderUserId } from '@/services/db/userService';

const WS_PATH = '/ws/conversation-titles';
const NEXTAUTH_SECRET = process.env.NEXTAUTH_SECRET;

/**
 * Extend the global type so we can memoise the WebSocketServer instance.
 */
type GlobalWithWss = typeof globalThis & {
  __conversationWss?: WebSocketServer;
  __conversationWssReady?: boolean;
};

/**
 * Bootstraps (or re‑uses) a singleton {@link WebSocketServer} and wires it to the
 * provided HTTP `server`. This approach ensures that during development each hot
 * reload doesn’t create a brand‑new WebSocket server, avoiding port clashes and
 * duplicated listeners.
 */
export function initWebSocketServer(server: Server): WebSocketServer {
  const g = globalThis as GlobalWithWss;

  // Re‑use the same instance across hot reloads
  const wss = g.__conversationWss ?? new WebSocketServer({ noServer: true });
  g.__conversationWss = wss;

  // Attach listeners only once
  if (!g.__conversationWssReady) {
    g.__conversationWssReady = true;

    /**
     * Upgrade HTTP → WS only for our namespace. Everything else (Next.js HMR,
     * React DevTools, etc.) falls through to their respective handlers.
     */
    server.on('upgrade', (req, socket, head) => {
      if (!isConversationUpgrade(req)) {
        return;
      }

      authenticateRequest(req)
        .then((userId) => {
          wss.handleUpgrade(req, socket, head, (ws) => {
            addClient(ws, userId);
            wss.emit('connection', ws, req);
          });
        })
        .catch(() => socket.destroy());
    });

    wss.on('connection', attachSocketListeners);
  }

  return wss;
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function isConversationUpgrade(req: IncomingMessage): boolean {
  const { pathname } = new URL(req.url ?? '', `http://${req.headers.host}`);
  return pathname === WS_PATH;
}

async function authenticateRequest(req: IncomingMessage): Promise<string> {
  const token = await getToken({
    req: Object.assign(req, { cookies: parseCookies(req) }) as typeof req & {
      cookies: Record<string, string>;
    },
    secret: NEXTAUTH_SECRET
  });

  if (!token?.sub) {
    throw new Error('Unauthenticated');
  }
  // Ensure the user exists in the database
  const user = await getUserByProviderUserId(token.sub);
  if (!user) {
    throw new Error('User not found');
  }
  const userId = user.id;

  return userId;
}

function parseCookies(req: IncomingMessage): Record<string, string> {
  return Object.fromEntries(
    (req.headers.cookie ?? '')
      .split(';')
      .map((c) => c.trim().split('='))
      .filter(([k, v]) => Boolean(k && v))
  );
}

function attachSocketListeners(socket: WebSocket): void {
  socket.on('message', (msg) => {
    try {
      console.warn('Unexpected client message:', JSON.parse(msg.toString()));
    } catch {
      /* ignore non‑JSON or malformed messages */
    }
  });

  socket.on('close', () => removeClient(socket));
}
