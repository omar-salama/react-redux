const mongoose = require("mongoose");
const User = require("./user.model");
const deleteAvatar = require("../helpers/deleteAvatar");

getAll = (req, res) => {
  User.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
};
getByName = (req, res) => {
  const name = req.params.name;
  User.find({ name: { $regex: `${name}`, $options: "i" } })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
};
getById = (req, res) => {
  const _id = req.params.id;
  User.findById({ _id })
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      res.status(400).json(err.message);
    });
};
createUser = (req, res) => {
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
};
updateUser = (req, res) => {
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
};
deleteUser = (req, res) => {
  const _id = req.params.id;
  User.findByIdAndDelete(_id)
    .then((data) => {
      if (data.avatar) deleteAvatar(data.avatar);
      return res.status(200).json();
    })
    .catch((err) => res.status(400).json(err.message));
};

module.exports = {
  getAll,
  getByName,
  getById,
  createUser,
  updateUser,
  deleteUser,
};
