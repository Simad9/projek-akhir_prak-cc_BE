const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedCategory() {
  const categories = [
    {
      category: "Pendidikan",
      status: "accepted",
    },
    {
      category: "Lingkungan",
      status: "accepted",
    },
    {
      category: "Ekonomi",
      status: "accepted",
    },
    {
      category: "Politik",
      status: "accepted",
    },
    {
      category: "Budaya",
      status: "accepted",
    },
    {
      category: "Teknologi",
      status: "accepted",
    },
    {
      category: "Kesehatan",
      status: "decline",
    },
  ];

  for (const category of categories) {
    await prisma.category.create({
      data: category,
    });
  }

  console.log("Categories seeded successfully.");
}

module.exports = { seedCategory };
