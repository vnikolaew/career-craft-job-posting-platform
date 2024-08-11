-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "fuzzystrmatch";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "vector" WITH SCHEMA "public";

-- CreateEnum
CREATE TYPE "UsersChallengeState" AS ENUM ('Pending', 'Playing', 'Finished', 'Stopped');

-- CreateEnum
CREATE TYPE "UsersChallengeMatchState" AS ENUM ('Pending', 'HalfAccepted', 'Accepted', 'Rejected', 'Started');

-- CreateEnum
CREATE TYPE "TypingRunMode" AS ENUM ('TIME', 'WORDS');

-- CreateEnum
CREATE TYPE "RunDifficulty" AS ENUM ('NORMAL', 'EXPERT', 'MASTER');

-- CreateEnum
CREATE TYPE "ConfidenceMode" AS ENUM ('ON', 'OFF', 'MAX');

-- CreateEnum
CREATE TYPE "CaretSmoothness" AS ENUM ('OFF', 'SLOW', 'MEDIUM', 'FAST');

-- CreateEnum
CREATE TYPE "CaretStyle" AS ENUM ('OFF', 'CURSOR', 'BLOCK', 'BLOCK_FILLED', 'UNDERSCORE');

-- CreateEnum
CREATE TYPE "ShowAverage" AS ENUM ('OFF', 'SPEED', 'ACC', 'BOTH');

-- CreateEnum
CREATE TYPE "IndicateTypos" AS ENUM ('OFF', 'BELOW', 'REPLACE');

-- CreateEnum
CREATE TYPE "PaceCaretSpeed" AS ENUM ('OFF', 'AVG', 'PB', 'LAST', 'DAILY', 'CUSTOM');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
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
CREATE TABLE "Account" (
    "userId" TEXT NOT NULL,
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
    "userConfigurationId" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("provider","providerAccountId")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userConfigurationId" TEXT,

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
CREATE TABLE "Tag" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "metadata" JSONB DEFAULT 'null',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userConfigurationId" TEXT,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersChallenge" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userOneId" TEXT NOT NULL,
    "userTwoId" TEXT NOT NULL,
    "userOneRunId" UUID,
    "userTwoRunId" UUID,
    "matchId" UUID NOT NULL,
    "metadata" JSONB DEFAULT 'null',
    "state" "UsersChallengeState" NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsersChallenge_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersChallengeMatch" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userOneId" TEXT NOT NULL,
    "userTwoId" TEXT NOT NULL,
    "metadata" JSONB DEFAULT 'null',
    "state" "UsersChallengeMatchState" NOT NULL DEFAULT 'Pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UsersChallengeMatch_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TypingRun" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "time" INTEGER,
    "wordCount" INTEGER,
    "totalTimeMilliseconds" INTEGER NOT NULL,
    "mode" "TypingRunMode" NOT NULL,
    "flags" INTEGER NOT NULL,
    "metadata" JSONB DEFAULT 'null',
    "typedLetters" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TypingRun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserConfiguration" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "test_difficulty" "RunDifficulty" NOT NULL DEFAULT 'NORMAL',
    "blind_mode" BOOLEAN NOT NULL DEFAULT false,
    "auto_save_mode" BOOLEAN NOT NULL DEFAULT false,
    "input_freedom_mode" BOOLEAN NOT NULL DEFAULT false,
    "input_confidence_mode" "ConfidenceMode" NOT NULL DEFAULT 'OFF',
    "input_indicate_typos" "IndicateTypos" NOT NULL DEFAULT 'OFF',
    "sound_click_sound" TEXT,
    "sound_error_sound" TEXT,
    "caret_smoothness" "CaretSmoothness" NOT NULL DEFAULT 'OFF',
    "caret_style" "CaretStyle" NOT NULL DEFAULT 'OFF',
    "pace_caret_style" "CaretStyle" NOT NULL DEFAULT 'OFF',
    "pace_caret_speed" "PaceCaretSpeed" NOT NULL DEFAULT 'OFF',
    "theme" TEXT NOT NULL DEFAULT 'dark',
    "theme_flip_colors" BOOLEAN NOT NULL DEFAULT false,
    "theme_colorful_mode" BOOLEAN NOT NULL DEFAULT false,
    "font_family" TEXT NOT NULL DEFAULT 'SFMono',
    "font_size" INTEGER NOT NULL DEFAULT 2,
    "elements_show_key_tips" BOOLEAN NOT NULL DEFAULT false,
    "elements_show_oof_warning" BOOLEAN NOT NULL DEFAULT false,
    "elements_show_caps_lock_warning" BOOLEAN NOT NULL DEFAULT false,
    "elements_show_average" "ShowAverage" NOT NULL DEFAULT 'OFF',
    "language" TEXT NOT NULL DEFAULT 'English',
    "metadata" JSONB DEFAULT 'null',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserConfiguration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserNotification" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "payload" JSONB DEFAULT 'null',
    "read" BOOLEAN NOT NULL DEFAULT false,
    "metadata" JSONB DEFAULT 'null',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserNotification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserExperience" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "level" INTEGER NOT NULL DEFAULT 1,
    "metadata" JSONB DEFAULT 'null',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserExperience_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "UserConfiguration_userId_key" ON "UserConfiguration"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserExperience_userId_key" ON "UserExperience"("userId");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tag" ADD CONSTRAINT "Tag_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersChallenge" ADD CONSTRAINT "UsersChallenge_userOneId_fkey" FOREIGN KEY ("userOneId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersChallenge" ADD CONSTRAINT "UsersChallenge_userTwoId_fkey" FOREIGN KEY ("userTwoId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersChallenge" ADD CONSTRAINT "UsersChallenge_userOneRunId_fkey" FOREIGN KEY ("userOneRunId") REFERENCES "TypingRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersChallenge" ADD CONSTRAINT "UsersChallenge_userTwoRunId_fkey" FOREIGN KEY ("userTwoRunId") REFERENCES "TypingRun"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersChallenge" ADD CONSTRAINT "UsersChallenge_matchId_fkey" FOREIGN KEY ("matchId") REFERENCES "UsersChallengeMatch"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersChallengeMatch" ADD CONSTRAINT "UsersChallengeMatch_userOneId_fkey" FOREIGN KEY ("userOneId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersChallengeMatch" ADD CONSTRAINT "UsersChallengeMatch_userTwoId_fkey" FOREIGN KEY ("userTwoId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TypingRun" ADD CONSTRAINT "TypingRun_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserConfiguration" ADD CONSTRAINT "UserConfiguration_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNotification" ADD CONSTRAINT "UserNotification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserExperience" ADD CONSTRAINT "UserExperience_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
