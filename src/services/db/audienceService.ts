import { prisma } from "@/lib/prisma";
import { Audience } from "@prisma/client";

export const getAllAudiences = async (): Promise<Audience[]> => {
  return prisma.audience.findMany();
};

export const getAudienceById = async (id: string): Promise<Audience | null> => {
  return prisma.audience.findUnique({ where: { id } });
};

export const createAudience = async (data: {
  name: string;
  description: string;
}): Promise<Audience> => {
  return prisma.audience.create({ data });
};

export const updateAudience = async (
  id: string,
  data: { name?: string; description?: string }
): Promise<Audience> => {
  return prisma.audience.update({
    where: { id },
    data,
  });
};

export const deleteAudience = async (id: string): Promise<Audience> => {
  return prisma.audience.delete({ where: { id } });
};
