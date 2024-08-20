-- AlterTable
ALTER TABLE "JobListingCategory" ADD COLUMN     "jobListingSubscriptionId" TEXT;

-- CreateTable
CREATE TABLE "_JobListingCategoryToJobListingSubscription" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_JobListingCategoryToJobListingSubscription_AB_unique" ON "_JobListingCategoryToJobListingSubscription"("A", "B");

-- CreateIndex
CREATE INDEX "_JobListingCategoryToJobListingSubscription_B_index" ON "_JobListingCategoryToJobListingSubscription"("B");

-- AddForeignKey
ALTER TABLE "_JobListingCategoryToJobListingSubscription" ADD CONSTRAINT "_JobListingCategoryToJobListingSubscription_A_fkey" FOREIGN KEY ("A") REFERENCES "JobListingCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_JobListingCategoryToJobListingSubscription" ADD CONSTRAINT "_JobListingCategoryToJobListingSubscription_B_fkey" FOREIGN KEY ("B") REFERENCES "JobListingSubscription"("id") ON DELETE CASCADE ON UPDATE CASCADE;
