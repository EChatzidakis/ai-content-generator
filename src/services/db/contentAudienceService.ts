import { prisma } from "@/lib/prisma";
import { Audience } from "@prisma/client";

export const getAllContentAudiences = async (): Promise<Audience[]> => {
  return prisma.audience.findMany();
};

export const getContentAudienceById = async (id: string): Promise<Audience | null> => {
  return prisma.audience.findUnique({ where: { id } });
};

export const createContentAudience = async (data: {
  name: string;
  description: string;
}): Promise<Audience> => {
  return prisma.audience.create({ data });
};

export const updateContentAudience = async (
  id: string,
  data: { name?: string; description?: string }
): Promise<Audience> => {
  return prisma.audience.update({
    where: { id },
    data,
  });
};

export const deleteContentAudience = async (id: string): Promise<Audience> => {
  return prisma.audience.delete({ where: { id } });
};
