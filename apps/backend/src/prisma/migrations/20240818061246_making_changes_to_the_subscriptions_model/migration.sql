/*
  Warnings:

  - Added the required column `notification_frequency` to the `JobListingSubscription` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "JobListingSubscriptionNotificationFrequency" AS ENUM ('Daily', 'Weekly');

-- DropForeignKey
ALTER TABLE "JobListingSubscription" DROP CONSTRAINT "JobListingSubscription_company_id_fkey";

-- AlterTable
ALTER TABLE "JobListingSubscription" ADD COLUMN     "keywords" TEXT[],
ADD COLUMN     "languages" TEXT[],
ADD COLUMN     "level" "JobListingLevel",
ADD COLUMN     "location" TEXT,
ADD COLUMN     "notification_frequency" "JobListingSubscriptionNotificationFrequency" NOT NULL,
ADD COLUMN     "parameters" JSONB NOT NULL DEFAULT 'null',
ADD COLUMN     "type" "JobListingEmploymentType",
ADD COLUMN     "work_from" "WorkFromHome",
ALTER COLUMN "company_id" DROP NOT NULL;

-- CreateTable
CREATE TABLE "_CompanyCategoryToJobListingSubscription" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyCategoryToJobListingSubscription_AB_unique" ON "_CompanyCategoryToJobListingSubscription"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyCategoryToJobListingSubscription_B_index" ON "_CompanyCategoryToJobListingSubscription"("B");

-- AddForeignKey
ALTER TABLE "JobListingSubscription" ADD CONSTRAINT "JobListingSubscription_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyCategoryToJobListingSubscription" ADD CONSTRAINT "_CompanyCategoryToJobListingSubscription_A_fkey" FOREIGN KEY ("A") REFERENCES "CompanyCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyCategoryToJobListingSubscription" ADD CONSTRAINT "_CompanyCategoryToJobListingSubscription_B_fkey" FOREIGN KEY ("B") REFERENCES "JobListingSubscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;
