const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

const getUserById = async (userId) => {
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

const updateUser = async (userId, data) => {
  const result = await prisma.user.update({
    where: {
      id_user: userId,
    },
    data: data,
  });
  return result;
};

module.exports = {
  getUsers,
  getUserById,
  updateUser,
};
