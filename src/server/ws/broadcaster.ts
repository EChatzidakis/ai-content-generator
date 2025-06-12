import { WebSocket } from 'ws';
import { BroadcastPayload } from './types';

type GlobalWithBroadcaster = typeof globalThis & {
  __userSockets?: Map<string, Set<WebSocket>>;
  __socketUsers?: Map<WebSocket, string>;
};

const g = globalThis as GlobalWithBroadcaster;
// Maps userId → Set of WebSockets
const userSockets =
  g.__userSockets ?? (g.__userSockets = new Map<string, Set<WebSocket>>());

// Maps WebSocket → userId
const socketUsers =
  g.__socketUsers ?? (g.__socketUsers = new Map<WebSocket, string>());

/**
 * Adds a WebSocket connection to the tracking maps.
 * @param socket - The WebSocket connection.
 * @param userId - The user ID associated with the connection.
 */
export function addClient(ws: WebSocket, userId: string) {
  let set = userSockets.get(userId);
  if (!set) {
    set = new Set<WebSocket>();
    userSockets.set(userId, set);
  }
  set.add(ws);
  socketUsers.set(ws, userId);
}

/**
 * Removes a WebSocket connection from the tracking maps.
 * @param socket - The WebSocket connection to remove.
 */
export function removeClient(ws: WebSocket) {
  const userId = socketUsers.get(ws);
  if (!userId) {
    return;
  }

  const set = userSockets.get(userId);
  if (set) {
    set.delete(ws);
    if (set.size === 0) {
      userSockets.delete(userId);
    }
  }
  socketUsers.delete(ws);
}

/**
 * Broadcasts a payload to all active sockets for a specific user.
 * @param userId - The user ID to send the payload to.
 * @param payload - The message payload to send.
 */
export function broadcastToUser(userId: string, payload: BroadcastPayload) {
  const sockets = userSockets.get(userId);
  if (!sockets) {
    return;
  }

  const message = JSON.stringify(payload);
  for (const ws of sockets) {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(message);
    }
  }
}

// export function broadcast(payload: BroadcastPayload) {
//   const message = JSON.stringify(payload);
//   clients.forEach((client) => {
//     client.socket.send(message);
//   });
// }
