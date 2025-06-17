import prisma from '@/lib/prisma';
// import { Prisma } from '@prisma/client';

export const createConversation = async ({
  title,
  promptSettings,
  userId
}: {
  title: string;
  promptSettings: string;
  userId: string;
}) => {
  return prisma.conversation.create({
    data: { title, promptSettings, userId }
  });
};

export const getConversationById = async (conversationId: string) => {
  return prisma.conversation.findUnique({
    where: { id: conversationId },
    include: { messages: true }
  });
};

export const getConversationsByUserId = async (userId: string) => {
  return prisma.conversation.findMany({
    where: { userId },
    include: { messages: true },
    orderBy: {
      updatedAt: 'desc'
    }
  });
};

export const updateConversationTitleByConversationId = async ({
  conversationId,
  title
}: {
  conversationId: string;
  title: string;
}) => {
  return prisma.conversation.update({
    where: { id: conversationId },
    data: { title }
  });
};

export const createMessage = async ({
  conversationId,
  role,
  content,
  timestamp
}: {
  conversationId: string;
  role: string;
  content: string;
  timestamp: Date;
}) => {
  return prisma.message.create({
    data: { conversationId, role, content, timestamp }
  });
};
