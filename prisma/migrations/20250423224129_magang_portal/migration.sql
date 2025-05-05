-- CreateTable
CREATE TABLE `Mark` (
    `id_mark` INTEGER NOT NULL AUTO_INCREMENT,
    `taskId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `mark` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id_mark`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Mark` ADD CONSTRAINT `Mark_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`id_task`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mark` ADD CONSTRAINT `Mark_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;
