const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const fs = require("fs/promises");
const PORT = process.env.PORT || 3001;
const app = express();
require("./db_connection");
const User = require("./users.model");

// handling image upload
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
}); // EOF handling image upload

app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "build")));
}
app.use("/uploads", express.static("uploads"));

app.get("/users", (req, res) => {
  User.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});
app.get("/users/name/:name", (req, res) => {
  const name = req.params.name;
  User.find({ name: { $regex: `${name}`, $options: "i" } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});
app.get("/users/:id", (req, res) => {
  const _id = req.params.id;
  User.findById({ _id })
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      res.status(400).json(err.message);
    });
});
app.post("/users", upload.single("avatar"), (req, res) => {
  let user = new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    email: req.body.email,
    avatar: req.file.filename,
  });
  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

app.put("/users/:id", upload.single("avatar"), (req, res) => {
  const _id = req.params.id;
  const user = {
    name: req.body.name,
    email: req.body.email,
    avatar: req.file ? req.file.filename : req.body.avatar,
  };
  User.findOneAndUpdate({ _id }, user)
    .then((data) => {
      if (user.avatar !== data.avatar) deleteAvatar(data.avatar);
      return res.status(200).json(data);
    })
    .catch((err) => res.status(400).json(err.message));
});

app.delete("/users/:id", (req, res) => {
  const _id = req.params.id;
  User.findByIdAndDelete(_id)
    .then((data) => {
      if (data.avatar) deleteAvatar(data.avatar);
      return res.status(200).json();
    })
    .catch((err) => res.status(400).json(err.message));
});
deleteAvatar = (avatar) => {
  fs.unlink(`uploads/${avatar}`).catch((err) => console.error(err));
};
// for handling Client-Side Routes on production
if (process.env.NODE_ENV === "production") {
  app.get("/*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
