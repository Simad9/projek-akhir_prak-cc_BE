const Intern = require("../models/userInternModels");
const validasiUploadImage = require("../utils/validasiUploadImage");

const dashboardIntern = async (req, res) => {
  try {
    const userId = req.userId;

    const [userData, taskData, pendingData, newsAuthor] = await Promise.all([
      Intern.getUserIntern(userId),
      Intern.getTaskData(userId),
      Intern.getPendingData(userId),
      Intern.getNewsAuthor(userId),
    ]);
    res.status(200).json({
      userId: userId,
      userData,
      taskData,
      pendingData,
      newsAuthor,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const writeNews = async (req, res) => {
  try {
    const userId = req.userId;
    const { taskId, categoryId, title, content, req_category } = req.body;

    // Author bisa request category
    if (req_category != "") {
      await Intern.createCategory(req_category);
    }

    const data = {
      taskId: parseInt(taskId),
      categoryId: parseInt(categoryId),
      authorId: userId,
      title,
      content,
      image: await validasiUploadImage(req.file, "news"),
    };
    const newNews = await Intern.writeNews(data);

    res.status(200).json({
      message: "Berhasil menulis berita",
      data: newNews,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const updateNews = async (req, res) => {
  try {
    const newsId = parseInt(req.params.id_news);

    const { taskId, categoryId, title, content } = req.body;

    const dataUpdate = {
      taskId: parseInt(taskId),
      categoryId: parseInt(categoryId),
      title,
      content,
    };

    if (req.file) {
      dataUpdate.image = await validasiUploadImage(req.file, "news");
    }

    const data = await Intern.updateNews(newsId, dataUpdate);

    res.status(200).json({
      message: "Berhasil memperbarui berita",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteNews = async (req, res) => {
  try {
    const newsId = parseInt(req.params.id_news);

    const data = await Intern.deleteNews(newsId);
    res.status(200).json({
      message: "Berhasil menghapus berita",
      data_dihapus: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

module.exports = {
  dashboardIntern,
  writeNews,
  updateNews,
  deleteNews,
};
