const express = require("express");
const router = express.Router();

// Routes
const newsRoute = require("./newsRoutes");
const authRoute = require("./authRoutes");
const userPublicRoutes = require("./userPublicRoutes");
const userInternRoutes = require("./userInternRoutes");
const userAdminRoutes = require("./userAdminRoutes");

// === Halaman Auth ===
router.use("/", authRoute);

// === Halaman Berita ===
router.use("/news", newsRoute);

// === Halaman User Public ===
router.use("/public", userPublicRoutes);

// Halaman User Magang
router.use("/intern", userInternRoutes);

// Halaman User Admin
router.use("/admin", userAdminRoutes);

module.exports = router;
