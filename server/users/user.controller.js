import User from "./user.model.js";
import deleteAvatar from "../helpers/deleteAvatar.js";
import ApiError from "../helpers/errors.class.js";

export const getAll = async (req, res, next) => {
  const result = await User.find({}).exec();
  res.status(200).json(result);
};

export const getByName = async (req, res, next) => {
  const { name } = req.query;
  const result = await User.find({
    name: { $regex: `${name}`, $options: "i" },
  }).exec();
  res.status(200).json(result);
};

export const getById = async (req, res, next) => {
  const _id = req.params.id;
  const result = await User.findById({ _id }).exec();
  if (!result) {
    return next(ApiError.notFound("User not found."));
    // return next(({ status: 404, message: "User not found." }))
  }
  res.status(200).json(result);
};

export const createUser = async (req, res, next) => {
  const { name, email } = req.body;
  await User.create({
    name: name,
    email: email,
    avatar: req.file.filename,
  });
  res.status(201).json();
};

export const updateUser = async (req, res, next) => {
  const _id = req.params.id;
  const { name, email, avatar } = req.body;
  const updatedUser = {
    _id,
    name: name,
    email: email,
    avatar: req.file ? req.file.filename : avatar,
  };
  const oldUser = await User.findByIdAndUpdate(_id, updatedUser).exec();
  if (updatedUser.avatar !== oldUser.avatar) deleteAvatar(oldUser.avatar);
  res.status(200).json(updatedUser);
};

export const deleteUser = async (req, res, next) => {
  const _id = req.params.id;
  const deletedUser = await User.findByIdAndDelete(_id).exec();
  deleteAvatar(deletedUser.avatar);
  res.status(200).json();
};
