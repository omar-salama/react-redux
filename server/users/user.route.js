const router = require("express").Router();
const user = require("./user.controller");
const upload = require("../middlewares/multer");

router
  .route("/users")
  .get(user.getAll)
  .post(upload.single("avatar"), user.createUser);

router
  .route("/users/:id")
  .get(user.getById)
  .put(upload.single("avatar"), user.updateUser)
  .delete(user.deleteUser);

router.get("/users/name/:name", user.getByName);

module.exports = router;
