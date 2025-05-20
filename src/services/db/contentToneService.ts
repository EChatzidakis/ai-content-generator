import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const contentToneService = {
  async getAll() {
    return prisma.contentTone.findMany();
  },

  async getById(id: string) {
    return prisma.contentTone.findUnique({ where: { id } });
  },

  async create(data: { name: string; description: string }) {
    return prisma.contentTone.create({ data });
  },

  async update(id: string, data: { name?: string; description?: string }) {
    return prisma.contentTone.update({
      where: { id },
      data,
    });
  },

  async delete(id: string) {
    return prisma.contentTone.delete({ where: { id } });
  },
};
