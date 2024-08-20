-- CreateTable
CREATE TABLE "UserAttachments" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "attachment_url" TEXT NOT NULL,
    "attachment_name" TEXT NOT NULL,
    "attachment_extension" TEXT NOT NULL,
    "metadata" JSONB DEFAULT 'null',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAttachments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserAttachments" ADD CONSTRAINT "UserAttachments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
