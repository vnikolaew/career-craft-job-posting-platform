-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "fuzzystrmatch";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector" WITH SCHEMA "public";

-- CreateEnum
CREATE TYPE "JobListingSubscriptionNotificationFrequency" AS ENUM ('Daily', 'Weekly');

-- CreateEnum
CREATE TYPE "JobListingLevel" AS ENUM ('Staff', 'Experts', 'Management');

-- CreateEnum
CREATE TYPE "JobListingEmploymentType" AS ENUM ('Permanent', 'Temporary', 'FreelanceProject', 'FullTime', 'PartTime', 'ForStudents', 'FlexibleTime', 'RefugeeStatus');

-- CreateEnum
CREATE TYPE "WorkFromHome" AS ENUM ('Hybrid', 'FullyRemote');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "emailVerified" TIMESTAMP(3),
    "metadata" JSONB DEFAULT 'null',
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SavedListing" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "listing_id" TEXT NOT NULL,
    "metadata" JSONB DEFAULT 'null',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SavedListing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Account" (
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    "metadata" JSONB DEFAULT 'null',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("provider","providerAccountId")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("identifier","token")
);

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
CREATE TABLE "CategoryOnCompany" (
    "company_id" TEXT NOT NULL,
    "category_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CategoryOnCompany_pkey" PRIMARY KEY ("company_id","category_id")
);

-- CreateTable
CREATE TABLE "CompanyCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "CompanyCategory_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "JobListingCategory" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "JobListingCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobListingSubscription" (
    "id" TEXT NOT NULL,
    "company_id" TEXT,
    "user_id" TEXT,
    "metadata" JSONB DEFAULT 'null',
    "notification_frequency" "JobListingSubscriptionNotificationFrequency" NOT NULL,
    "location" TEXT,
    "level" "JobListingLevel",
    "work_from" "WorkFromHome",
    "type" "JobListingEmploymentType",
    "languages" TEXT[],
    "parameters" JSONB NOT NULL DEFAULT 'null',
    "keywords" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobListingSubscription_pkey" PRIMARY KEY ("id")
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
    "company_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobListing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CompanyCategoryToJobListingSubscription" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "Company_email_key" ON "Company"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyCategoryToJobListingSubscription_AB_unique" ON "_CompanyCategoryToJobListingSubscription"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyCategoryToJobListingSubscription_B_index" ON "_CompanyCategoryToJobListingSubscription"("B");

-- AddForeignKey
ALTER TABLE "SavedListing" ADD CONSTRAINT "SavedListing_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

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
ALTER TABLE "JobListingSubscription" ADD CONSTRAINT "JobListingSubscription_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobListingSubscription" ADD CONSTRAINT "JobListingSubscription_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JobListing" ADD CONSTRAINT "JobListing_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyCategoryToJobListingSubscription" ADD CONSTRAINT "_CompanyCategoryToJobListingSubscription_A_fkey" FOREIGN KEY ("A") REFERENCES "CompanyCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyCategoryToJobListingSubscription" ADD CONSTRAINT "_CompanyCategoryToJobListingSubscription_B_fkey" FOREIGN KEY ("B") REFERENCES "JobListingSubscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;
