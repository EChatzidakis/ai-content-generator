-- DropForeignKey
ALTER TABLE "ContentType" DROP CONSTRAINT "ContentType_defaultAudienceId_fkey";

-- DropForeignKey
ALTER TABLE "ContentType" DROP CONSTRAINT "ContentType_defaultContentFormatId_fkey";

-- DropForeignKey
ALTER TABLE "ContentType" DROP CONSTRAINT "ContentType_defaultToneStyleId_fkey";

-- CreateTable
CREATE TABLE "_ManyToManyToneStyles" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ManyToManyToneStyles_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ManyToManyContentFormats" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ManyToManyContentFormats_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_ManyToManyAudiences" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_ManyToManyAudiences_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ManyToManyToneStyles_B_index" ON "_ManyToManyToneStyles"("B");

-- CreateIndex
CREATE INDEX "_ManyToManyContentFormats_B_index" ON "_ManyToManyContentFormats"("B");

-- CreateIndex
CREATE INDEX "_ManyToManyAudiences_B_index" ON "_ManyToManyAudiences"("B");

-- AddForeignKey
ALTER TABLE "_ManyToManyToneStyles" ADD CONSTRAINT "_ManyToManyToneStyles_A_fkey" FOREIGN KEY ("A") REFERENCES "ContentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ManyToManyToneStyles" ADD CONSTRAINT "_ManyToManyToneStyles_B_fkey" FOREIGN KEY ("B") REFERENCES "ToneStyle"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ManyToManyContentFormats" ADD CONSTRAINT "_ManyToManyContentFormats_A_fkey" FOREIGN KEY ("A") REFERENCES "ContentFormat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ManyToManyContentFormats" ADD CONSTRAINT "_ManyToManyContentFormats_B_fkey" FOREIGN KEY ("B") REFERENCES "ContentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ManyToManyAudiences" ADD CONSTRAINT "_ManyToManyAudiences_A_fkey" FOREIGN KEY ("A") REFERENCES "Audience"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ManyToManyAudiences" ADD CONSTRAINT "_ManyToManyAudiences_B_fkey" FOREIGN KEY ("B") REFERENCES "ContentType"("id") ON DELETE CASCADE ON UPDATE CASCADE;
