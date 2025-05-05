const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUserAdmin = async (userId) => {
  const userAdmin = await prisma.user.findFirst({
    where: {
      id_user: userId,
    },
    select: {
      id_user: true,
      name: true,
      email: true,
      role: true,
      profile_picture: true,
    },
  });
  return userAdmin;
};

const getPendingData = async () => {
  const result = await prisma.news.findMany({
    where: {
      status: "pending",
    },
    select: {
      id_news: true,
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
      author: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      created_at: "desc",
    },
  });
  return result;
};

const getTotalUser = async () => {
  const result = await prisma.user.count();
  return result;
};

const getTotalIntern = async () => {
  const result = await prisma.user.count({
    where: {
      role: "intern",
    },
  });
  return result;
};

const getAllCategory = async () => {
  const result = await prisma.category.findMany({
    where: {
      status: "accepted",
    },
    select: {
      category: true,
    },
  });
  return result;
};

const getReqCategory = async () => {
  const result = await prisma.category.findMany({
    where: {
      status: "decline",
    },
    select: {
      id_category: true,
      category: true,
    },
  });
  return result;
};

const approveReqCategory = async (id_category) => {
  const result = await prisma.category.update({
    where: {
      id_category: id_category,
    },
    data: {
      status: "accepted",
    },
  });
  return result;
};

const deleteReqCategory = async (id_category) => {
  const result = await prisma.category.delete({
    where: {
      id_category: id_category,
    },
  });
  return result;
};

const getReviewNews = async (newsId) => {
  const result = await prisma.news.findUnique({
    where: {
      id_news: newsId,
    },
    select: {
      id_news: true,
      title: true,
      content: true,
      image: true,
      created_at: true,
      task: {
        select: {
          task_title: true,
        },
      },
      author: {
        select: {
          name: true,
        },
      },
      category: {
        select: {
          category: true,
        },
      },
    },
  });
  return result;
};

const updateReviewNews = async (newsId, data) => {
  await prisma.pending.create({
    data: {
      newsId: newsId,
      note: data.note,
      status: data.status,
    },
  });

  const result = await prisma.news.update({
    where: {
      id_news: newsId,
    },
    data: {
      status: data.status,
    },
  });

  return result;
};

const approveNews = async (newsId) => {
  const result = await prisma.news.update({
    where: {
      id_news: newsId,
    },
    data: {
      status: "approved",
    },
  });
  return result;
};

const getControlAccount = async () => {
  const result = await prisma.user.findMany({
    select: {
      id_user: true,
      profile_picture: true,
      name: true,
      email: true,
      role: true,
    },
  });
  return result;
};
const updateControlAccount = async (id_user, data) => {
  const result = await prisma.user.update({
    where: {
      id_user: id_user,
    },
    data: data,
  });
  return result;
};
const deleteControlAccount = async (id_user) => {
  const result = await prisma.user.delete({
    where: {
      id_user: id_user,
    },
  });
  return result;
};

const getInternsAccount = async () => {
  const result = await prisma.user.findMany({
    where: {
      role: "intern",
    },
    select: {
      id_user: true,
      profile_picture: true,
      name: true,
      email: true,
      role: true,
    },
  });
  return result;
};

const updateInternsAccount = async (id_user, data) => {
  const result = await prisma.user.update({
    where: {
      id_user: id_user,
    },
    data: data,
  });
  return result;
};
const deleteInternsAccount = async (id_user) => {
  const result = await prisma.user.delete({
    where: {
      id_user: id_user,
    },
  });
  return result;
};

const getUsersAccount = async () => {
  const result = await prisma.user.findMany({
    where: {
      role: "public",
    },
    select: {
      id_user: true,
      profile_picture: true,
      name: true,
      email: true,
      role: true,
    },
  });
  return result;
};

const updateUsersAccount = async (id_user, data) => {
  const result = await prisma.user.update({
    where: {
      id_user: id_user,
    },
    data: data,
  });
  return result;
};
const deleteUsersAccount = async (id_user) => {
  const result = await prisma.user.delete({
    where: {
      id_user: id_user,
    },
  });
  return result;
};

const getMarkIntern = async (id_user) => {
  const result = await prisma.mark.findMany({
    where: {
      userId: id_user,
    },
    select: {
      id_user: true,
      taskId: true,
      mark: true,
    },
  });
  return result;
};

const updateMarkIntern = async (id_user, data) => {
  const result = await prisma.mark.upsert({
    where: {
      userId_taskId: {
        userId: id_user,
        taskId: data.taskId,
      },
    },
    update: {
      mark: data.mark,
    },
    create: {
      userId: id_user,
      taskId: data.taskId,
      mark: data.mark,
    },
  });
  return result;
};

const getTask = async () => {
  const result = await prisma.task.findMany({
    select: {
      id_task: true,
      task_title: true,
      task_deadline: true,
    },
  });
  return result;
};

const createTask = async (data) => {
  const result = await prisma.task.create({
    data: data,
  });
  return result;
};

const updateTask = async (id_task, data) => {
  const result = await prisma.task.update({
    where: {
      id_task: id_task,
    },
    data: data,
  });
  return result;
};

module.exports = {
  getUserAdmin,
  getPendingData,
  getTotalUser,
  getTotalIntern,
  getAllCategory,
  getReqCategory,
  approveReqCategory,
  deleteReqCategory,
  getReviewNews,
  updateReviewNews,
  approveNews,
  getMarkIntern,
  updateMarkIntern,
  getTask,
  createTask,
  updateTask,
  // Control Account
  getControlAccount,
  updateControlAccount,
  deleteControlAccount,
  getInternsAccount,
  updateInternsAccount,
  deleteInternsAccount,
  getUsersAccount,
  updateUsersAccount,
  deleteUsersAccount,
};
