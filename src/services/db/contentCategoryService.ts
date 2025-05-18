// src/services/contentCategoryService.ts
import { PrismaClient, ContentCategory } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Get all content categories, optionally including related content types.
 */
export const getAllContentCategories = async (): Promise<ContentCategory[]> => {
  return await prisma.contentCategory.findMany({
    include: { types: true },
  });
};

/**
 * Get a single content category by ID.
 */
export const getContentCategoryById = async (
  id: string
): Promise<ContentCategory | null> => {
  return await prisma.contentCategory.findUnique({
    where: { id },
    include: { types: true },
  });
};

/**
 * Create a new content category.
 */
export const createContentCategory = async (data: {
  name: string;
  description: string;
  userId?: string; // Optional if you extend the model to associate users
}): Promise<ContentCategory> => {
  return await prisma.contentCategory.create({
    data,
  });
};

/**
 * Update an existing content category by ID.
 */
export const updateContentCategory = async (
  id: string,
  data: {
    name?: string;
    description?: string;
  }
): Promise<ContentCategory> => {
  return await prisma.contentCategory.update({
    where: { id },
    data,
  });
};

/**
 * Delete a content category by ID.
 */
export const deleteContentCategory = async (
  id: string
): Promise<ContentCategory> => {
  return await prisma.contentCategory.delete({
    where: { id },
  });
};
