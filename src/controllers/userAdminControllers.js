const Admin = require("../models/userAdminModels");
const User = require("../models/usersModels");
const bcrypt = require("bcrypt");
const validasiUploadImage = require("../utils/validasiUploadImage");

const dashboardAdmin = async (req, res) => {
  try {
    const userId = req.userId;
    const [
      userData,
      pendingData,
      totalUser,
      totalIntern,
      allCategory,
      reqCategory,
    ] = await Promise.all([
      Admin.getUserAdmin(userId),
      Admin.getPendingData(),
      Admin.getTotalUser(),
      Admin.getTotalIntern(),
      Admin.getAllCategory(),
      Admin.getReqCategory(),
    ]);

    res.status(200).json({
      userId: userId,
      userData,
      pendingData,
      totalUser,
      totalIntern,
      allCategory,
      reqCategory,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const approveReqCategory = async (req, res) => {
  try {
    const id_category = parseInt(req.params.id_category);
    const data = await Admin.approveReqCategory(id_category);
    res.status(200).json({
      message: "Berhasil menyetujui kategori",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteReqCategory = async (req, res) => {
  try {
    const id_category = parseInt(req.params.id_category);
    const data = await Admin.deleteReqCategory(id_category);
    res.status(200).json({
      message: "Berhasil menghapus kategori",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const pendingNews = async (req, res) => {
  try {
    const data = await Admin.getPendingData();
    res.status(200).json({
      message: "Data berhasil ditarik",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const reviewNews = async (req, res) => {
  try {
    const newsId = parseInt(req.params.id_news);
    const data = await Admin.getReviewNews(newsId);

    res.status(200).json({
      message: "Data berhasil ditarik",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const updateReviewNews = async (req, res) => {
  try {
    const newsId = parseInt(req.params.id_news);
    const { status, note } = req.body;
    console.log(status, note);

    // Kalo di approved admin tampilin di halaman news
    if (note == "approved") {
      await Admin.approveNews(newsId);
    }
    const data = await Admin.updateReviewNews(newsId, { status, note });

    res.status(200).json({
      message: "Berhasil update review berita pending",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

// Control Account
const controlAccount = async (req, res) => {
  try {
    const data = await Admin.getControlAccount();
    res.status(200).json({
      message: "Data berhasil ditarik",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const updateControlAccount = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const salt = await bcrypt.genSalt();
    const dataForm = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hashSync(req.body.password, salt),
    };
    if (req.file) {
      dataForm.profile_picture = await validasiUploadImage(
        req.file,
        "profile_picture"
      );
    }
    const data = await Admin.updateControlAccount(id_user, dataForm);
    res.status(200).json({
      message: "Data berhasil diperbarui",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteControlAccount = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const data = await Admin.deleteControlAccount(id_user);
    res.status(200).json({
      message: "Data berhasil dihapus",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const internsAccount = async (req, res) => {
  try {
    const data = await Admin.getInternsAccount();
    res.status(200).json({
      message: "Data berhasil ditarik",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const updateInternsAccount = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const salt = await bcrypt.genSalt();
    const dataForm = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hashSync(req.body.password, salt),
    };
    if (req.file) {
      dataForm.profile_picture = await validasiUploadImage(
        req.file,
        "profile_picture"
      );
    }
    const data = await Admin.updateInternsAccount(id_user, dataForm);
    res.status(200).json({
      message: "Data berhasil diperbarui",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteInternsAccount = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const data = await Admin.deleteInternsAccount(id_user);
    res.status(200).json({
      message: "Data berhasil dihapus",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const usersAccount = async (req, res) => {
  try {
    const data = await Admin.getUsersAccount();
    res.status(200).json({
      message: "Data berhasil ditarik",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const updateUsersAccount = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const salt = await bcrypt.genSalt();
    const dataForm = {
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: await bcrypt.hashSync(req.body.password, salt),

    };
    if (req.file) {
      dataForm.profile_picture = await validasiUploadImage(
        req.file,
        "profile_picture"
      );
    }
    const data = await Admin.updateUsersAccount(id_user, dataForm);
    res.status(200).json({
      message: "Data berhasil diperbarui",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteUsersAccount = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const data = await Admin.deleteUsersAccount(id_user);
    res.status(200).json({
      message: "Data berhasil dihapus",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const markIntern = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const [dataIntern, dataMarkIntern] = await Promise.all([
      User.getUserById(id_user),
      Admin.getMarkIntern(id_user),
    ]);
    res.status(200).json({
      message: "Data berhasil ditambah",
      data: {
        dataIntern,
        dataMarkIntern,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const updateMarkIntern = async (req, res) => {
  try {
    const id_user = parseInt(req.params.id_user);
    const marks = req.body.marks;

    console.log(marks);

    const promises = marks.map((mark) => Admin.updateMarkIntern(id_user, mark));
    const data = await Promise.all(promises);

    res.status(200).json({
      message: "Data berhasil diperbarui",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const getTask = async (req, res) => {
  try {
    const data = await Admin.getTask();
    res.status(200).json({
      message: "Data berhasil ditarik",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const createTask = async (req, res) => {
  try {
    const dataForm = {
      task_title: req.body.task,
      task_deadline: req.body.deadline,
    };
    const data = await Admin.createTask(dataForm);
    res.status(200).json({
      message: "Data berhasil ditambah",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const id_task = parseInt(req.params.id_task);
    const dataForm = {
      task_title: req.body.task,
      task_deadline: req.body.deadline,
    };
    const data = await Admin.updateTask(id_task, dataForm);
    res.status(200).json({
      message: "Data berhasil diperbarui",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

module.exports = {
  dashboardAdmin,
  approveReqCategory,
  deleteReqCategory,
  pendingNews,
  reviewNews,
  updateReviewNews,
  markIntern,
  updateMarkIntern,
  getTask,
  createTask,
  updateTask,
  // Control Account
  controlAccount,
  updateControlAccount,
  deleteControlAccount,
  internsAccount,
  updateInternsAccount,
  deleteInternsAccount,
  usersAccount,
  updateUsersAccount,
  deleteUsersAccount,
};
