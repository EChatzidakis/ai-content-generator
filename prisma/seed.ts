// prisma/seed.ts
import { PrismaClient } from '@prisma/client';
import { audiences } from './seeds/audiences.ts';
import { contentFormats } from './seeds/contentFormats.ts';
import { contentTypes } from './seeds/contentTypes.ts';
import { contentCategories } from './seeds/contentCategories.ts';
import { toneStyles } from './seeds/toneStyles.ts';

const prisma = new PrismaClient();

async function upsertToneStyles() {
  for (const tone of toneStyles) {
    await prisma.toneStyle.upsert({
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
    await prisma.contentType.upsert({
      where: { id: type.id },
      update: {},
      create: type
    });
  }
}

// Run seeding
async function main() {
  console.log('Seeding database...');

  await upsertToneStyles();
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
