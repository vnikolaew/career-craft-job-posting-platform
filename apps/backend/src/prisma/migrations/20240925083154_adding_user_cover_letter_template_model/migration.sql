-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "emailverified" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "UserCoverLetterTemplate" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "letter" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "metadata" JSONB DEFAULT 'null',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserCoverLetterTemplate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserCoverLetterTemplate" ADD CONSTRAINT "UserCoverLetterTemplate_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
