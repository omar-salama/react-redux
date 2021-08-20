const router = require("express").Router();
const user = require("./user.controller");
const upload = require("../middlewares/multer");
const promiseResolver = require("../helpers/promiseResolver");

router
  .route("/")
  .get(promiseResolver(user.getAll))
  .post(upload.single("avatar"), promiseResolver(user.createUser));

router.get("/search?", promiseResolver(user.getByName));

router
  .route("/:id")
  .get(promiseResolver(user.getById))
  .put(upload.single("avatar"), promiseResolver(user.updateUser))
  .delete(promiseResolver(user.deleteUser));

module.exports = router;
