const express = require("express");
const router = express.Router();
const multer = require("multer");

// Middlewares
const verifyToken = require("../middlewares/verifyToken");
const checkRole = require("../middlewares/checkRole");
const upload = multer({ dest: "uploads/" }); // folder penyimpanan file

// Controllers
const usersController = require("../controllers/usersControllers");
const userPublikController = require("../controllers/userPublicControllers");

// Role
const requireRole = "public";

// Page : User - Dashboard
router.get(
  "/dashboard",
  verifyToken,
  checkRole(requireRole),
  userPublikController.dashboardPublic
);
router.delete(
  "/dashboard/like/:id_like",
  verifyToken,
  checkRole(requireRole),
  userPublikController.deleteLikeNews
);
router.delete(
  "/dashboard/save/:id_save",
  verifyToken,
  checkRole(requireRole),
  userPublikController.deleteSaveNews
);

// Page : User - Like News
router.get(
  "/like",
  verifyToken,
  checkRole(requireRole),
  userPublikController.likeNews
);
router.delete(
  "/like/:id_like",
  verifyToken,
  checkRole(requireRole),
  userPublikController.deleteLikeNews
);

// Page : User - Save News
router.get(
  "/save",
  verifyToken,
  checkRole(requireRole),
  userPublikController.saveNews
);
router.delete(
  "/save/:id_save",
  verifyToken,
  checkRole(requireRole),
  userPublikController.deleteSaveNews
);

// Page : Edit User
router.put(
  "/edit-account",
  verifyToken,
  checkRole(requireRole),
  upload.single("profile_picture"),
  usersController.updateUser
);

module.exports = router;
