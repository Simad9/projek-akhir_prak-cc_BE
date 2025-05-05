const express = require("express");
const router = express.Router();
const multer = require("multer");

// Middlewares
const verifyToken = require("../middlewares/verifyToken");
const checkRole = require("../middlewares/checkRole");
const upload = multer({ dest: "uploads/" }); // folder penyimpanan file

// Controllers
const usersController = require("../controllers/usersControllers");
const userAdminController = require("../controllers/userAdminControllers");

// Role
const requireRole = "admin";

// Page : Admin - Dashboard
router.get(
  "/dashboard",
  verifyToken,
  checkRole(requireRole),
  userAdminController.dashboardAdmin
);
router.put(
  "/dashboard/approve-category/:id_category",
  verifyToken,
  checkRole(requireRole),
  userAdminController.approveReqCategory
);
router.delete(
  "/dashboard/delete-category/:id_category",
  verifyToken,
  checkRole(requireRole),
  userAdminController.deleteReqCategory
);

// Page : Admin - Pending News
router.get(
  "/pending-news",
  verifyToken,
  checkRole(requireRole),
  userAdminController.pendingNews
);

// Page : Admin - Review News
router.get(
  "/review-news/:id_news",
  verifyToken,
  checkRole(requireRole),
  userAdminController.reviewNews
);
router.put(
  "/review-news/:id_news",
  verifyToken,
  checkRole(requireRole),
  userAdminController.updateReviewNews
);

// Page : Admin - Kontrol Akun
router.get(
  "/control-account",
  verifyToken,
  checkRole(requireRole),
  userAdminController.controlAccount
);
router.put(
  "/control-account/:id_user",
  verifyToken,
  checkRole(requireRole),
  upload.single("profile_picture"),
  userAdminController.updateControlAccount
);
router.delete(
  "/control-account/:id_user",
  verifyToken,
  checkRole(requireRole),
  userAdminController.deleteControlAccount
);
router.get(
  "/control-account/intern",
  verifyToken,
  checkRole(requireRole),
  userAdminController.internsAccount
);
router.put(
  "/control-account/intern/:id_user",
  verifyToken,
  checkRole(requireRole),
  upload.single("profile_picture"),
  userAdminController.updateInternsAccount
);
router.delete(
  "/control-account/intern/:id_user",
  verifyToken,
  checkRole(requireRole),
  userAdminController.deleteInternsAccount
);
router.get(
  "/control-account/user",
  verifyToken,
  checkRole(requireRole),
  userAdminController.usersAccount
);
router.put(
  "/control-account/user/:id_user",
  verifyToken,
  checkRole(requireRole),
  upload.single("profile_picture"),
  userAdminController.updateUsersAccount
);
router.delete(
  "/control-account/user/:id_user",
  verifyToken,
  checkRole(requireRole),
  userAdminController.deleteUsersAccount
);

// Page : Admin - Menlai Anak Magang
router.get(
  "/mark-intern/:id_user",
  verifyToken,
  checkRole(requireRole),
  userAdminController.markIntern
);
router.put(
  "/mark-intern/:id_user",
  verifyToken,
  checkRole(requireRole),
  userAdminController.updateMarkIntern
);

//Page : Admin - Edit Tugas
router.get(
  "/task",
  verifyToken,
  checkRole(requireRole),
  userAdminController.getTask
);
router.post(
  "/task",
  verifyToken,
  checkRole(requireRole),
  userAdminController.createTask
);
router.put(
  "/task/:id_task",
  verifyToken,
  checkRole(requireRole),
  userAdminController.updateTask
);

// Page : Admin - Edit User
router.put(
  "/edit-account",
  verifyToken,
  checkRole(requireRole),
  upload.single("profile_picture"),
  usersController.updateUser
);

module.exports = router;
