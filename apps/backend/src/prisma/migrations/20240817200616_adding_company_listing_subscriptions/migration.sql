/*
  Warnings:

  - You are about to drop the column `userId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `JobListing` table. All the data in the column will be lost.
  - You are about to drop the column `listingId` on the `SavedListing` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the `_CompanyToCompanyCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_JobListingToJobListingCategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `JobListing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listing_id` to the `SavedListing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "JobListing" DROP CONSTRAINT "JobListing_companyId_fkey";

-- DropForeignKey
ALTER TABLE "SavedListing" DROP CONSTRAINT "SavedListing_listingId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- DropForeignKey
ALTER TABLE "_CompanyToCompanyCategory" DROP CONSTRAINT "_CompanyToCompanyCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_CompanyToCompanyCategory" DROP CONSTRAINT "_CompanyToCompanyCategory_B_fkey";

-- DropForeignKey
ALTER TABLE "_JobListingToJobListingCategory" DROP CONSTRAINT "_JobListingToJobListingCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_JobListingToJobListingCategory" DROP CONSTRAINT "_JobListingToJobListingCategory_B_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "JobListing" DROP COLUMN "companyId",
ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SavedListing" DROP COLUMN "listingId",
ADD COLUMN     "listing_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CompanyToCompanyCategory";

-- DropTable
DROP TABLE "_JobListingToJobListingCategory";

-- CreateTable
CREATE TABLE "CategoryOnCompany" (
    "company_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoryOnCompany_pkey" PRIMARY KEY ("company_id","category_id")
);

-- CreateTable
CREATE TABLE "CategoryOnJobListing" (
    "listing_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoryOnJobListing_pkey" PRIMARY KEY ("listing_id","category_id")
);

-- CreateTable
CREATE TABLE "JobListingSubscription" (
    "id" TEXT NOT NULL,
    "company_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "metadata" JSONB DEFAULT 'null',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobListingSubscription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SavedListing" ADD CONSTRAINT "SavedListing_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "JobListing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryOnCompany" ADD CONSTRAINT "CategoryOnCompany_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryOnCompany" ADD CONSTRAINT "CategoryOnCompany_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "CompanyCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryOnJobListing" ADD CONSTRAINT "CategoryOnJobListing_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "JobListing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryOnJobListing" ADD CONSTRAINT "CategoryOnJobListing_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "JobListingCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobListingSubscription" ADD CONSTRAINT "JobListingSubscription_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobListingSubscription" ADD CONSTRAINT "JobListingSubscription_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobListing" ADD CONSTRAINT "JobListing_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
