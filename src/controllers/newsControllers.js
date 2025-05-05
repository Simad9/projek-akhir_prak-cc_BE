const News = require("../models/newsModels");

// Home Page
const homepage = async (req, res) => {
  try {
    // Menjalankan 3 query secara paralel
    const [newNews, likedNews, homeNewsData] = await Promise.all([
      News.threeNewNews(),
      News.mostLikedNews(),
      News.homeNews(),
    ]);

    // Mengembalikan semua data dalam satu response
    res.json({
      newNews,
      likedNews,
      homeNews: homeNewsData,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

// Berita Lainnya - 12 Berita, 1 halaman
const pageNews = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = 12;

  try {
    const data = await News.pageNews(page, pageSize);
    const totalNews = await News.totalNews();
    const totalPages = Math.ceil(totalNews / pageSize);

    res.status(200).json({
      data: data,
      pagination: {
        currentPage: page,
        totalPages,
        totalNews,
        pageSize,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

// Detail Berita
const detailNews = async (req, res) => {
  const newsId = parseInt(req.params.id_news);
  try {
    // Menjalankan 4 query secara paralel
    const [detailNews, countLike, countComment, comments] = await Promise.all([
      News.getNewsDetailById(newsId),
      News.getCountNewsLikes(newsId),
      News.getCountNewsComments(newsId),
      News.getNewsComments(newsId),
    ]);

    res.status(200).json({
      detailNews,
      countLike,
      countComment,
      comments,
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};
const internNews = async (req, res) => {
  const userId = parseInt(req.params.id_user);

  try {
    const [internNews, internNewsAuthor] = await Promise.all([
      News.internNews(userId),
      News.internNewsAuthor(userId),
    ]);

    if (!internNews || !internNewsAuthor)
      res.status(404).json({ message: "Data Tidak Ditemukan" });
    res.status(200).json({
      internNews,
      internNewsAuthor,
    });
  } catch (error) {
    res.status(500).json({ message: "Terjadi Kesalahan", error: error.message });
  }
};

// Mencari Berita = Berita dicari berdasarkan keyword
const searchNews = async (req, res) => {
  const keyword = req.query.q || "";
  const page = parseInt(req.query.page) || 1;
  const pageSize = 12;
  try {
    const data = await News.searchNews(keyword, page, pageSize);
    const totalNews = await News.totalNews();
    const totalPages = Math.ceil(totalNews / pageSize);

    res.status(200).json({
      data: data,
      pagination: {
        currentPage: page,
        totalPages,
        totalNews,
        pageSize,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Terjadi Kesalahan",
      error: error.message,
    });
  }
};

module.exports = {
  homepage,
  pageNews,
  detailNews,
  internNews,
  searchNews,
};
