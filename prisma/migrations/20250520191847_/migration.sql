/*
  Warnings:

  - You are about to drop the column `defaultToneStyleId` on the `ContentType` table. All the data in the column will be lost.
  - You are about to drop the `ToneStyle` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ManyToManyToneStyles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `defaultContentToneId` to the `ContentType` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_ManyToManyToneStyles" DROP CONSTRAINT "_ManyToManyToneStyles_A_fkey";

-- DropForeignKey
ALTER TABLE "_ManyToManyToneStyles" DROP CONSTRAINT "_ManyToManyToneStyles_B_fkey";

-- AlterTable
ALTER TABLE "ContentType" DROP COLUMN "defaultToneStyleId",
ADD COLUMN     "defaultContentToneId" TEXT NOT NULL;

-- DropTable
DROP TABLE "ToneStyle";

-- DropTable
DROP TABLE "_ManyToManyToneStyles";

-- CreateTable
CREATE TABLE "ContentTone" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ContentTone_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ManyToManyContentTones" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ManyToManyContentTones_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "ContentTone_name_key" ON "ContentTone"("name");

-- CreateIndex
CREATE INDEX "_ManyToManyContentTones_B_index" ON "_ManyToManyContentTones"("B");

-- AddForeignKey
ALTER TABLE "_ManyToManyContentTones" ADD CONSTRAINT "_ManyToManyContentTones_A_fkey" FOREIGN KEY ("A") REFERENCES "ContentTone"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ManyToManyContentTones" ADD CONSTRAINT "_ManyToManyContentTones_B_fkey" FOREIGN KEY ("B") REFERENCES "ContentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
