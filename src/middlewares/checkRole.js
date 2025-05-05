const checkRole = (requiredRole) => {
  return (req, res, next) => {
    const user = req;

    if (user.role !== requiredRole) {
      return res.status(403).json({ message: "Forbidden: Role tidak sesuai" });
    }

    next(); // lanjut ke route berikutnya
  };
};

module.exports = checkRole;
