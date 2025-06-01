import prisma from '@/lib/prisma';
// import { Prisma } from '@prisma/client';

export const createConversation = async ({ title, promptSettings, userId }: {
  title: string;
  promptSettings: string;
  userId: string;
}) => {
  return prisma.conversation.create({
    data: { title, promptSettings, userId }
  });
};

export const createMessage = async ({ conversationId, role, content, timestamp }: {
  conversationId: string;
  role: string;
  content: string;
  timestamp: Date;
}) => {
  return prisma.message.create({
    data: { conversationId, role, content, timestamp }
  });
}