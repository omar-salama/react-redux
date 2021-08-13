const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${new Date().toISOString()}_${file.originalname}`);
  },
});
const fileFilter = (req, file, cb) => {
  switch (file.mimetype) {
    case "image/jpeg":
    case "image/jpg":
    case "image/png":
      cb(null, true);
    default:
      cb(null, false);
  }
};
const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter,
});

module.exports = upload
