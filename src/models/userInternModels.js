const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUserIntern = async (id_user) => {
  const result = await prisma.user.findUnique({
    where: {
      id_user: id_user,
    },
    select: {
      id_user: true,
      name: true,
      username: true,
      email: true,
      password: true,
      role: true,
      profile_picture: true,
    },
  });
  return result;
};

const getTaskData = async (userId) => {
  const result = await prisma.task.findMany({
    where: {
      news: {
        none: {
          authorId: userId,
        },
      },
    },
    select: {
      id_task: true,
      task_title: true,
      task_deadline: true,
    },
  });
  return result;
};

const getPendingData = async (userId) => {
  const result = await prisma.news.findMany({
    where: {
      authorId: userId,
      AND: {
        OR: [
          {
            status: "pending",
          },
          {
            status: "revised",
          },
        ],
      },
    },
    select: {
      id_news: true,
      title: true,
      status: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });
  return result;
};

const getNewsAuthor = async (userId) => {
  const result = await prisma.news.findMany({
    where: {
      authorId: userId,
    },
    select: {
      id_news: true,
      taskId: true,
      title: true,
      content: true,
      image: true,
      created_at: true,
      status: true,
      category: {
        select: {
          category: true,
        },
      },
      pending: {
        select: {
          note: true,
        },
        where: {
          status: "revised",
        },
      },
    },
  });
  return result;
};

const writeNews = async (data) => {
  const result = await prisma.news.create({
    data: data,
  });
  return result;
};

const createCategory = async (category) => {
  const result = await prisma.category.create({
    data: {
      category: category,
      status: "decline",
    },
  });
  return result;
};

const updateNews = async (newsId, data) => {
  const result = await prisma.news.update({
    where: {
      id_news: newsId,
    },
    data: {
      taskId: data.taskId,
      categoryId: data.categoryId,
      title: data.title,
      content: data.content,
      image: data.image,
      status: "pending",
    },
  });
  return result;
};

const deleteNews = async (newsId) => {
  const result = await prisma.news.delete({
    where: {
      id_news: newsId,
    },
  });
  return result;
};

module.exports = {
  getUserIntern,
  getTaskData,
  getPendingData,
  getNewsAuthor,
  writeNews,
  updateNews,
  deleteNews,
  createCategory,
};
