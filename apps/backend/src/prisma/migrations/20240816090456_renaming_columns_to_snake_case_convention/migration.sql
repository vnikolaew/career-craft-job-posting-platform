/*
  Warnings:

  - You are about to drop the column `userId` on the `Account` table. All the data in the column will be lost.
  - The primary key for the `CategoryOnCompany` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `companyId` on the `CategoryOnCompany` table. All the data in the column will be lost.
  - The primary key for the `CategoryOnJobListing` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `categoryId` on the `CategoryOnJobListing` table. All the data in the column will be lost.
  - You are about to drop the column `listingId` on the `CategoryOnJobListing` table. All the data in the column will be lost.
  - You are about to drop the column `companyId` on the `JobListing` table. All the data in the column will be lost.
  - You are about to drop the column `listingId` on the `SavedListing` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Session` table. All the data in the column will be lost.
  - Added the required column `user_id` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `CategoryOnCompany` table without a default value. This is not possible if the table is not empty.
  - Added the required column `category_id` to the `CategoryOnJobListing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listing_id` to the `CategoryOnJobListing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `company_id` to the `JobListing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listing_id` to the `SavedListing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryOnCompany" DROP CONSTRAINT "CategoryOnCompany_companyId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryOnJobListing" DROP CONSTRAINT "CategoryOnJobListing_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "CategoryOnJobListing" DROP CONSTRAINT "CategoryOnJobListing_listingId_fkey";

-- DropForeignKey
ALTER TABLE "JobListing" DROP CONSTRAINT "JobListing_companyId_fkey";

-- DropForeignKey
ALTER TABLE "SavedListing" DROP CONSTRAINT "SavedListing_listingId_fkey";

-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_userId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CategoryOnCompany" DROP CONSTRAINT "CategoryOnCompany_pkey",
DROP COLUMN "companyId",
ADD COLUMN     "company_id" TEXT NOT NULL,
ADD CONSTRAINT "CategoryOnCompany_pkey" PRIMARY KEY ("company_id", "category_id");

-- AlterTable
ALTER TABLE "CategoryOnJobListing" DROP CONSTRAINT "CategoryOnJobListing_pkey",
DROP COLUMN "categoryId",
DROP COLUMN "listingId",
ADD COLUMN     "category_id" TEXT NOT NULL,
ADD COLUMN     "listing_id" TEXT NOT NULL,
ADD CONSTRAINT "CategoryOnJobListing_pkey" PRIMARY KEY ("listing_id", "category_id");

-- AlterTable
ALTER TABLE "JobListing" DROP COLUMN "companyId",
ADD COLUMN     "company_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SavedListing" DROP COLUMN "listingId",
ADD COLUMN     "listing_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "SavedListing" ADD CONSTRAINT "SavedListing_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "JobListing"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryOnCompany" ADD CONSTRAINT "CategoryOnCompany_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryOnJobListing" ADD CONSTRAINT "CategoryOnJobListing_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "JobListing"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategoryOnJobListing" ADD CONSTRAINT "CategoryOnJobListing_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "JobListingCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobListing" ADD CONSTRAINT "JobListing_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
