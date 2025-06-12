import { broadcastToUser } from '@/server/ws/broadcaster';
import { updateConversationTitleByConversationId } from '@/services/db/conversationService';

type BroadcastPayloadProps = {
  conversationId: string;
  title: string;
};

export async function publishConversationTitle(
  userId: string,
  { conversationId, title }: BroadcastPayloadProps
) {
  const conversation = await updateConversationTitleByConversationId({
    conversationId,
    title
  });

  broadcastToUser(userId, {
    type: 'conversation-updated',
    data: {
      conversationId,
      updatedFields: {
        title: conversation.title,
        updatedAt: conversation.updatedAt.toISOString()
      }
    }
  });
}
