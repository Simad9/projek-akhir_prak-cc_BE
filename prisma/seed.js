// prisma/seed.ts
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// seeder
const { seedCategory } = require("./seeder/categorySeeder");
const { seedUser } = require("./seeder/userSeeder");
const { seedTask } = require("./seeder/taskSeeder");
const { seedNews } = require("./seeder/newsSeeder");
const { seedLike } = require("./seeder/likeSeeder");
const { commentSeeder } = require("./seeder/commentSeeder");

// main
async function main() {
  // Hapus Data
  // await prisma.category.deleteMany();
  // await prisma.task.deleteMany();
  // await prisma.user.deleteMany();
  // await prisma.news.deleteMany();
  // await prisma.like.deleteMany();
  // await prisma.comment.deleteMany();

  // Seeder
  // await seedCategory();
  // await seedTask();
  // await seedUser();
  // await seedNews();
  // await seedLike();
  // await commentSeeder();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
