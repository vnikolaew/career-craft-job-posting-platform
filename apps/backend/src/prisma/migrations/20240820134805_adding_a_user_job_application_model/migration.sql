-- CreateTable
CREATE TABLE "UserJobApplication" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "listing_id" TEXT NOT NULL,
    "metadata" JSONB DEFAULT 'null',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserJobApplication_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserJobApplication" ADD CONSTRAINT "UserJobApplication_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserJobApplication" ADD CONSTRAINT "UserJobApplication_listing_id_fkey" FOREIGN KEY ("listing_id") REFERENCES "JobListing"("id") ON DELETE CASCADE ON UPDATE CASCADE;
