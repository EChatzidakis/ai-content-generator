/*
  Warnings:

  - Added the required column `description` to the `Audience` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `ContentCategory` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `description` to the `ContentFormat` table without a default value. This is not possible if the table is not empty.
  - Made the column `defaultToneId` on table `ContentType` required. This step will fail if there are existing NULL values in that column.
  - Made the column `defaultFormatId` on table `ContentType` required. This step will fail if there are existing NULL values in that column.
  - Made the column `defaultAudienceId` on table `ContentType` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `description` to the `ToneStyle` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ContentType" DROP CONSTRAINT "ContentType_defaultAudienceId_fkey";

-- DropForeignKey
ALTER TABLE "ContentType" DROP CONSTRAINT "ContentType_defaultFormatId_fkey";

-- DropForeignKey
ALTER TABLE "ContentType" DROP CONSTRAINT "ContentType_defaultToneId_fkey";

-- AlterTable
ALTER TABLE "Audience" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ContentCategory" ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "ContentFormat" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ContentType" ALTER COLUMN "defaultToneId" SET NOT NULL,
ALTER COLUMN "defaultFormatId" SET NOT NULL,
ALTER COLUMN "defaultAudienceId" SET NOT NULL;

-- AlterTable
ALTER TABLE "ToneStyle" ADD COLUMN     "description" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ContentType" ADD CONSTRAINT "ContentType_defaultToneId_fkey" FOREIGN KEY ("defaultToneId") REFERENCES "ToneStyle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentType" ADD CONSTRAINT "ContentType_defaultFormatId_fkey" FOREIGN KEY ("defaultFormatId") REFERENCES "ContentFormat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContentType" ADD CONSTRAINT "ContentType_defaultAudienceId_fkey" FOREIGN KEY ("defaultAudienceId") REFERENCES "Audience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
