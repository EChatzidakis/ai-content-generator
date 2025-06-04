import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllContentTones = async () => {
  return prisma.contentTone.findMany();
};

export const getContentToneById = async (id: string) => {
  return prisma.contentTone.findUnique({ where: { id } });
};

export const createContentTone = async (data: {
  name: string;
  description: string;
}) => {
  return prisma.contentTone.create({ data });
};

export const updateContentTone = async (
  id: string,
  data: { name?: string; description?: string }
) => {
  return prisma.contentTone.update({
    where: { id },
    data
  });
};

export const deleteContentTone = async (id: string) => {
  return prisma.contentTone.delete({ where: { id } });
};
