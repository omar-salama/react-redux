import { Router } from "express";
import {
  getAll,
  createUser,
  getByName,
  getById,
  updateUser,
  deleteUser,
} from "./user.controller.js";
import upload from "../middlewares/multer.js";
import promiseResolver from "../helpers/promiseResolver.js";

const router = Router();
router
  .route("/")
  .get(promiseResolver(getAll))
  .post(upload.single("avatar"), promiseResolver(createUser));

router.get("/search?", promiseResolver(getByName));

router
  .route("/:id")
  .get(promiseResolver(getById))
  .put(upload.single("avatar"), promiseResolver(updateUser))
  .delete(promiseResolver(deleteUser));

export default router;
