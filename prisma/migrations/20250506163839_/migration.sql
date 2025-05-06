/*
  Warnings:

  - You are about to drop the column `defaultFormatId` on the `ContentType` table. All the data in the column will be lost.
  - You are about to drop the column `defaultToneId` on the `ContentType` table. All the data in the column will be lost.
  - Added the required column `defaultContentFormatId` to the `ContentType` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defaultToneStyleId` to the `ContentType` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ContentType" DROP CONSTRAINT "ContentType_defaultFormatId_fkey";

-- DropForeignKey
ALTER TABLE "ContentType" DROP CONSTRAINT "ContentType_defaultToneId_fkey";

-- AlterTable
ALTER TABLE "ContentType" DROP COLUMN "defaultFormatId",
DROP COLUMN "defaultToneId",
ADD COLUMN     "defaultContentFormatId" TEXT NOT NULL,
ADD COLUMN     "defaultToneStyleId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ContentType" ADD CONSTRAINT "ContentType_defaultToneStyleId_fkey" FOREIGN KEY ("defaultToneStyleId") REFERENCES "ToneStyle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentType" ADD CONSTRAINT "ContentType_defaultContentFormatId_fkey" FOREIGN KEY ("defaultContentFormatId") REFERENCES "ContentFormat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
