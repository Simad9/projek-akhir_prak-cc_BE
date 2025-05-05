const Public = require("../models/userPublicModels");

// Halaman Dashboard
const dashboardPublic = async (req, res) => {
  const id_user = req.userId;
  try {
    const [userData, countLike, countSave, likeNews, saveNews] =
      await Promise.all([
        Public.getUserPublic(id_user),
        Public.countLikeNews(id_user),
        Public.countSaveNews(id_user),
        Public.getLikeNews(id_user),
        Public.getSaveNews(id_user),
      ]);

    if (userData.role !== "public")
      return res.status(400).json({ message: "Anda bukan user public" });

    res.status(200).json({
      userData,
      countLike,
      countSave,
      likeNews,
      saveNews,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const likeNews = async (req, res) => {
  const id_user = req.userId;
  try {
    const data = await Public.getLikeNews(id_user);

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteLikeNews = async (req, res) => {
  try {
    const likeId = parseInt(req.params.id_like);
    const data = await Public.deleteLikeNews(likeId);

    res.status(200).json({
      message: "Berhasil menghapus berita yang disukai",
      data_dihapus: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const saveNews = async (req, res) => {
  const id_user = req.userId;
  try {
    const data = await Public.getSaveNews(id_user);

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

const deleteSaveNews = async (req, res) => {
  try {
    const saveId = parseInt(req.params.id_save);
    const data = await Public.deleteSaveNews(saveId);

    res.status(200).json({
      message: "Berhasil menghapus berita yang disimpan",
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
  dashboardPublic,
  likeNews,
  saveNews,
  deleteLikeNews,
  deleteSaveNews,
};
