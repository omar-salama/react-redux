const User = require("./user.model");
const deleteAvatar = require("../helpers/deleteAvatar");

getAll = async (req, res, next) => {
  try {
    const result = await User.find({}).exec();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
getByName = async (req, res, next) => {
  const { name } = req.query;
  try {
    const result = await User.find({
      name: { $regex: `${name}`, $options: "i" },
    }).exec();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
getById = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const result = await User.findById({ _id }).exec();
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};
createUser = async (req, res, next) => {
  const { name, email } = req.body;
  try {
    await User.create({
      name: name,
      email: email,
      avatar: req.file.filename,
    });
    res.status(201).json();
  } catch (err) {
    next(err);
  }
};
updateUser = async (req, res, next) => {
  const _id = req.params.id;
  const { name, email, avatar } = req.body;
  const updatedUser = {
    name: name,
    email: email,
    avatar: req.file ? req.file.filename : avatar,
  };
  try {
    const oldUser = await User.findByIdAndUpdate( _id, updatedUser).exec();
    if (updatedUser.avatar !== oldUser.avatar) deleteAvatar(oldUser.avatar);
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};
deleteUser = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const deletedUser = await User.findByIdAndDelete(_id).exec();
    deleteAvatar(deletedUser.avatar);
    res.status(200).json();
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
  getByName,
  getById,
  createUser,
  updateUser,
  deleteUser,
};
