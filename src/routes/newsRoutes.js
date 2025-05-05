const express = require("express");
const router = express.Router();

// Controllers
const newsController = require("../controllers/newsControllers");

// Page : Home Page Awal
router.get("/", newsController.homepage);
// Page : Halaman Lainnya
router.get("/page", newsController.pageNews);
// Page : Cari Berita
router.get("/search", newsController.searchNews);
// Page : Berita Magang
router.get("/magang/:id_user", newsController.internNews);
// Page : Detail Berita
router.get("/:id_news", newsController.detailNews);

module.exports = router;