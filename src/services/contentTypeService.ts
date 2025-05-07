import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// Fetch all content types with related data
export const getAllContentTypes = async () => {
  return await prisma.contentType.findMany({
    include: {
      category: true,
      defaultTone: true,
      defaultFormat: true,
      defaultAudience: true,
    },
  });
};

// Fetch a single content type by ID
export const getContentTypeById = async (id: string) => {
  return await prisma.contentType.findUnique({
    where: { id },
    include: {
      category: true,
      defaultTone: true,
      defaultFormat: true,
      defaultAudience: true,
    },
  });
};

// Create a new content type
export const createContentType = async (data: Prisma.ContentTypeCreateInput) => {
  return await prisma.contentType.create({
    data,
  });
};

// Update an existing content type by ID
export const updateContentType = async (id: string, data: Prisma.ContentTypeUpdateInput) => {
  return await prisma.contentType.update({
    where: { id },
    data,
  });
};

// Delete a content type by ID
export const deleteContentType = async (id: string) => {
  return await prisma.contentType.delete({
    where: { id },
  });
};
