const route = require("express").Router();
const user = require("./user.controller");
const upload = require("../middlewares/multer");

route
  .get("/users", user.getAll)
  .get("/users/name/:name", user.getByName)
  .get("/users/:id", user.getById)
  .post("/users", upload.single("avatar"), user.createUser)
  .put("/users/:id", upload.single("avatar"), user.updateUser)
  .delete("/users/:id", user.deleteUser);

module.exports = route;
