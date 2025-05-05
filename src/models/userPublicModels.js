const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUserPublic = async (userId) => {
  const result = await prisma.user.findFirst({
    where: {
      id_user: userId,
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

const countLikeNews = async (userId) => {
  const result = await prisma.like.count({
    where: {
      userId: userId,
    },
  });
  return result;
};

const countSaveNews = async (userId) => {
  const result = await prisma.save.count({
    where: {
      userId: userId,
    },
  });
  return result;
};

const getLikeNews = async (userId) => {
  const result = await prisma.like.findMany({
    where: {
      userId: userId,
    },
    select: {
      id_like: true,
      news: {
        select: {
          id_news: true,
          category: {
            select: {
              category: true,
            },
          },
          author: {
            select: {
              name: true,
            },
          },
          title: true,
          content: true,
          image: true,
          created_at: true,
        },
      },
    },
  });
  return result;
};

const deleteLikeNews = async (likeId) => {
  const result = prisma.like.delete({
    where: {
      id_like: likeId,
    },
  });
  return result;
};

const getSaveNews = async (userId) => {
  const result = await prisma.save.findMany({
    where: {
      userId: userId,
    },
    select: {
      id_save: true,
      news: {
        select: {
          id_news: true,
          category: {
            select: {
              category: true,
            },
          },
          author: {
            select: {
              name: true,
            },
          },
          title: true,
          content: true,
          image: true,
          created_at: true,
        },
      },
    },
  });
  return result;
};

const deleteSaveNews = async (saveId) => {
  const result = prisma.save.delete({
    where: {
      id_save: saveId,
    },
  });
  return result;
};

module.exports = {
  getUserPublic,
  countLikeNews,
  countSaveNews,
  getLikeNews,
  getSaveNews,
  deleteLikeNews,
  deleteSaveNews,
};
