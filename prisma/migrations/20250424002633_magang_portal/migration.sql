/*
  Warnings:

  - A unique constraint covering the columns `[userId,taskId]` on the table `Mark` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Mark_userId_taskId_key` ON `Mark`(`userId`, `taskId`);
