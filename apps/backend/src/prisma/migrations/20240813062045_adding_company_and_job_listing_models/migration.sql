/*
  Warnings:

  - You are about to drop the column `userConfigurationId` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `userConfigurationId` on the `Session` table. All the data in the column will be lost.
  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TypingRun` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserConfiguration` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserExperience` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserNotification` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsersChallenge` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UsersChallengeMatch` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "JobListingLevel" AS ENUM ('Staff', 'Experts', 'Management');

-- CreateEnum
CREATE TYPE "JobListingEmploymentType" AS ENUM ('Permanent', 'Temporary', 'FreelanceProject', 'FullTime', 'PartTime', 'ForStudents', 'FlexibleTime', 'RefugeeStatus');

-- CreateEnum
CREATE TYPE "WorkFromHome" AS ENUM ('Hybrid', 'FullyRemote');

-- DropForeignKey
ALTER TABLE "Tag" DROP CONSTRAINT "Tag_userId_fkey";

-- DropForeignKey
ALTER TABLE "TypingRun" DROP CONSTRAINT "TypingRun_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserConfiguration" DROP CONSTRAINT "UserConfiguration_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserExperience" DROP CONSTRAINT "UserExperience_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserNotification" DROP CONSTRAINT "UserNotification_userId_fkey";

-- DropForeignKey
ALTER TABLE "UsersChallenge" DROP CONSTRAINT "UsersChallenge_matchId_fkey";

-- DropForeignKey
ALTER TABLE "UsersChallenge" DROP CONSTRAINT "UsersChallenge_userOneId_fkey";

-- DropForeignKey
ALTER TABLE "UsersChallenge" DROP CONSTRAINT "UsersChallenge_userOneRunId_fkey";

-- DropForeignKey
ALTER TABLE "UsersChallenge" DROP CONSTRAINT "UsersChallenge_userTwoId_fkey";

-- DropForeignKey
ALTER TABLE "UsersChallenge" DROP CONSTRAINT "UsersChallenge_userTwoRunId_fkey";

-- DropForeignKey
ALTER TABLE "UsersChallengeMatch" DROP CONSTRAINT "UsersChallengeMatch_userOneId_fkey";

-- DropForeignKey
ALTER TABLE "UsersChallengeMatch" DROP CONSTRAINT "UsersChallengeMatch_userTwoId_fkey";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "userConfigurationId";

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "userConfigurationId";

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "TypingRun";

-- DropTable
DROP TABLE "UserConfiguration";

-- DropTable
DROP TABLE "UserExperience";

-- DropTable
DROP TABLE "UserNotification";

-- DropTable
DROP TABLE "UsersChallenge";

-- DropTable
DROP TABLE "UsersChallengeMatch";

-- DropEnum
DROP TYPE "CaretSmoothness";

-- DropEnum
DROP TYPE "CaretStyle";

-- DropEnum
DROP TYPE "ConfidenceMode";

-- DropEnum
DROP TYPE "IndicateTypos";

-- DropEnum
DROP TYPE "PaceCaretSpeed";

-- DropEnum
DROP TYPE "RunDifficulty";

-- DropEnum
DROP TYPE "ShowAverage";

-- DropEnum
DROP TYPE "TypingRunMode";

-- DropEnum
DROP TYPE "UsersChallengeMatchState";

-- DropEnum
DROP TYPE "UsersChallengeState";

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "about_raw" TEXT NOT NULL,
    "career_description_raw" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "metadata" JSONB DEFAULT 'null',
    "brand_image_url" TEXT,
    "banner_image_url" TEXT,
    "local_info" JSONB NOT NULL DEFAULT 'null',
    "worldwide_info" JSONB NOT NULL DEFAULT 'null',
    "benefits" TEXT[],
    "company_values" TEXT[],
    "work_environment" TEXT[],
    "hiring_process" TEXT[],
    "contacts" JSONB NOT NULL DEFAULT 'null',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "CompanyCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobListing" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description_raw" TEXT NOT NULL,
    "external_application_url" TEXT,
    "level" "JobListingLevel",
    "work_from" "WorkFromHome",
    "type" "JobListingEmploymentType",
    "location" TEXT NOT NULL,
    "languages" TEXT[],
    "parameters" JSONB NOT NULL DEFAULT 'null',
    "keywords" TEXT[],
    "companyId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobListing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CompanyToCompanyCategory" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_key" ON "Company"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyToCompanyCategory_AB_unique" ON "_CompanyToCompanyCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyToCompanyCategory_B_index" ON "_CompanyToCompanyCategory"("B");

-- AddForeignKey
ALTER TABLE "JobListing" ADD CONSTRAINT "JobListing_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToCompanyCategory" ADD CONSTRAINT "_CompanyToCompanyCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToCompanyCategory" ADD CONSTRAINT "_CompanyToCompanyCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "CompanyCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
