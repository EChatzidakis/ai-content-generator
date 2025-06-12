import { broadcastToUser } from '@/server/ws/broadcaster';
import { createMessage } from '@/services/db/conversationService';

type BroadcastPayloadProps = {
  conversationId: string;
  role: string;
  content: string;
};

export async function publishNewMessage(
  userId: string,
  { conversationId, role, content }: BroadcastPayloadProps
) {
  const message = await createMessage({
    conversationId,
    role,
    content,
    timestamp: new Date()
  });

  broadcastToUser(userId, {
    type: 'message-added',
    data: {
      conversationId,
      message: {
        id: message.id,
        role: message.role,
        content: message.content,
        timestamp: message.timestamp.toISOString()
      }
    }
  });
}
