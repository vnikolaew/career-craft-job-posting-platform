/*
  Warnings:

  - You are about to drop the column `jobListingSubscriptionId` on the `JobListingCategory` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JobListingCategory" DROP COLUMN "jobListingSubscriptionId";

-- AlterTable
ALTER TABLE "JobListingSubscription" ADD COLUMN     "user_email" TEXT;
