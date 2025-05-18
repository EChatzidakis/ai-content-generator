// src/lib/services/contentFormatService.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createContentFormat = async (
  name: string,
  description: string
) => {
  return await prisma.contentFormat.create({
    data: {
      name,
      description,
    },
  });
};

export const getAllContentFormats = async () => {
  return await prisma.contentFormat.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    include: {
      types: true, // if you want to include related ContentTypes
    },
  });
};

export const getContentFormatById = async (id: string) => {
  return await prisma.contentFormat.findUnique({
    where: { id },
    include: {
      types: true,
    },
  });
};

export const updateContentFormat = async (
  id: string,
  data: { name?: string; description?: string }
) => {
  return await prisma.contentFormat.update({
    where: { id },
    data,
  });
};

export const deleteContentFormat = async (id: string) => {
  return await prisma.contentFormat.delete({
    where: { id },
  });
};
