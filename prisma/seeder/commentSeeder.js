const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const commentSeeder = async () => {
  const comments = [
    {
      newsId: 1,
      userId: 10,
      comment: "Keren beritanya, semangat terus ya temen seperjuanganku",
    },
    {
      newsId: 1,
      userId: 11,
      comment: "Semangat terus menulis beritanyaaaa....",
    },
    {
      newsId: 2,
      userId: 3,
      comment: "first comment",
    }, 
  ];
  for (const comment of comments) {
    await prisma.comment.create({
      data: comment,
    });
  }

  console.log("Comments seeded successfully.");
};

module.exports = { commentSeeder };
