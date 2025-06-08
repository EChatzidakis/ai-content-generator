// prisma/seed.ts
import { PrismaClient, Prisma } from '@prisma/client';
import { audiences } from './seeds/audiences.ts';
import { contentFormats } from './seeds/contentFormats.ts';
import { contentTypes } from './seeds/contentTypes.ts';
import { contentCategories } from './seeds/contentCategories.ts';
import { contentTones } from './seeds/contentTones.ts';

const prisma = new PrismaClient();

async function upsertContentTones() {
  for (const tone of contentTones) {
    await prisma.contentTone.upsert({
      where: { id: tone.id },
      update: {},
      create: tone
    });
  }
}

async function upsertContentFormats() {
  for (const format of contentFormats) {
    await prisma.contentFormat.upsert({
      where: { id: format.id },
      update: {},
      create: format
    });
  }
}

async function upsertAudiences() {
  for (const audience of audiences) {
    await prisma.audience.upsert({
      where: { id: audience.id },
      update: {},
      create: audience
    });
  }
}

async function upsertContentCategories() {
  for (const category of contentCategories) {
    await prisma.contentCategory.upsert({
      where: { id: category.id },
      update: {},
      create: category
    });
  }
}

async function upsertContentTypes() {
  for (const type of contentTypes) {
    const createData: Prisma.ContentTypeCreateInput = {
      id: type.id,
      name: type.name,
      description: type.description,
      temperature: type.temperature,
      defaultAudienceId: type.defaultAudienceId,
      defaultContentFormatId: type.defaultContentFormatId,
      defaultContentToneId: type.defaultContentToneId,
      category: { connect: { id: type.categoryId } },
      formats: {
        connect: type.formatsIds.map((id) => ({ id }))
      },
      tones: {
        connect: type.toneIds.map((id) => ({ id }))
      },
      audiences: {
        connect: type.audiencesIds.map((id) => ({ id }))
      }
    };

    const updateData: Prisma.ContentTypeUpdateInput = {
      formats: {
        set: [],
        connect: type.formatsIds.map((id) => ({ id }))
      },
      tones: {
        set: [],
        connect: type.toneIds.map((id) => ({ id }))
      },
      audiences: {
        set: [],
        connect: type.audiencesIds.map((id) => ({ id }))
      }
    };

    await prisma.contentType.upsert({
      where: { id: type.id },
      update: updateData,
      create: createData
    });
  }
}

// Run seeding
async function main() {
  console.log('Seeding database...');

  await upsertContentTones();
  await upsertContentFormats();
  await upsertAudiences();
  await upsertContentCategories();
  await upsertContentTypes();

  console.log('Seeding complete!');
}

main()
  .catch((e) => {
    console.error('Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
