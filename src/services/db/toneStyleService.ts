import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const toneStyleService = {
  async getAll() {
    return prisma.toneStyle.findMany();
  },

  async getById(id: string) {
    return prisma.toneStyle.findUnique({ where: { id } });
  },

  async create(data: { name: string; description: string }) {
    return prisma.toneStyle.create({ data });
  },

  async update(id: string, data: { name?: string; description?: string }) {
    return prisma.toneStyle.update({
      where: { id },
      data,
    });
  },

  async delete(id: string) {
    return prisma.toneStyle.delete({ where: { id } });
  },
};
