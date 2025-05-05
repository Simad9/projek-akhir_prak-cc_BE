const User = require("../models/usersModels");
const bcrypt = require("bcrypt");
const validasiUploadImage = require("../utils/validasiUploadImage");

const getUsers = async (req, res) => {
  try {
    const users = await User.getUsers();
    res.status(200).json({
      message: "Data berhasil ditarik",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id_user;
    const user = await User.getUserById(userId);
    res.status(200).json({
      message: "Data berhasil ditarik",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};
const updateUser = async (req, res) => {
  try {
    // Ambil data dari request
    const { name, username, email, password_lama, password_baru } = req.body;
    const userId = req.userId;
    const fileInput = req.file;

    // Cek User
    const user = await User.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password_lama, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Password Lama tidak cocok" });
    }

    // Hasing Password
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password_baru, salt);

    // Data dikumpulkan
    const dataUpdate = {
      name,
      username,
      email,
      password: hashPassword,
    };

    if (req.file) {
      dataUpdate.image = await validasiUploadImage(
        fileInput,
        "profile_picture"
      );
    }

    // Query Data
    const data = await User.updateUser(userId, dataUpdate);

    // Response
    res.status(200).json({
      message: "Data berhasil diperbarui",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

module.exports = {
  getUsers,
  getUserById,
  updateUser,
};
