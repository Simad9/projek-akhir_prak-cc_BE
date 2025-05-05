const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
async function seedTask() {
  const tasks = [
    // task_title    String
    // task_deadline DateTime
    {
      task_title: "Pembuatan Berita Tema Teknologi",
      task_deadline: "2025-03-30T00:00:00.000Z",
    },
    {
      task_title: "Pembuatan Cerita Bermakana",
      task_deadline: "2025-03-30T00:00:00.000Z",
    },
  ];

  for (const task of tasks) {
    await prisma.task.create({
      data: task,
    });
  }

  console.log("Tasks seeded successfully.");
}

module.exports = { seedTask };