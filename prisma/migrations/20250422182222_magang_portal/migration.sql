-- CreateTable
CREATE TABLE `User` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `role` ENUM('public', 'intern', 'admin') NOT NULL DEFAULT 'public',
    `profile_picture` VARCHAR(255) NULL,
    `refresh_token` TEXT NULL,
    `university` VARCHAR(191) NULL,
    `major` VARCHAR(191) NULL,
    `internship_date` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Task` (
    `id_task` INTEGER NOT NULL AUTO_INCREMENT,
    `task_title` VARCHAR(191) NOT NULL,
    `task_deadline` DATETIME(3) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id_task`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id_category` INTEGER NOT NULL AUTO_INCREMENT,
    `category` VARCHAR(191) NOT NULL,
    `status` ENUM('accepted', 'decline') NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id_category`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `News` (
    `id_news` INTEGER NOT NULL AUTO_INCREMENT,
    `taskId` INTEGER NOT NULL,
    `categoryId` INTEGER NOT NULL,
    `authorId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` TEXT NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `status` ENUM('pending', 'approved', 'revised') NULL DEFAULT 'pending',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id_news`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Like` (
    `id_like` INTEGER NOT NULL AUTO_INCREMENT,
    `newsId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `like` BOOLEAN NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_like`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Save` (
    `id_save` INTEGER NOT NULL AUTO_INCREMENT,
    `newsId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `saved_news` BOOLEAN NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_save`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Comment` (
    `id_comment` INTEGER NOT NULL AUTO_INCREMENT,
    `newsId` INTEGER NOT NULL,
    `userId` INTEGER NOT NULL,
    `comment` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_comment`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pending` (
    `id_pending` INTEGER NOT NULL AUTO_INCREMENT,
    `newsId` INTEGER NOT NULL,
    `status` ENUM('pending', 'approved', 'revised') NOT NULL DEFAULT 'pending',
    `note` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `resolved_at` DATETIME(3) NULL,

    PRIMARY KEY (`id_pending`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `News` ADD CONSTRAINT `News_taskId_fkey` FOREIGN KEY (`taskId`) REFERENCES `Task`(`id_task`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `News` ADD CONSTRAINT `News_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id_category`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `News` ADD CONSTRAINT `News_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_newsId_fkey` FOREIGN KEY (`newsId`) REFERENCES `News`(`id_news`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Like` ADD CONSTRAINT `Like_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Save` ADD CONSTRAINT `Save_newsId_fkey` FOREIGN KEY (`newsId`) REFERENCES `News`(`id_news`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Save` ADD CONSTRAINT `Save_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_newsId_fkey` FOREIGN KEY (`newsId`) REFERENCES `News`(`id_news`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Comment` ADD CONSTRAINT `Comment_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pending` ADD CONSTRAINT `Pending_newsId_fkey` FOREIGN KEY (`newsId`) REFERENCES `News`(`id_news`) ON DELETE CASCADE ON UPDATE CASCADE;
