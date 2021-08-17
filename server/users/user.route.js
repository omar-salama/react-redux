const router = require("express").Router();
const user = require("./user.controller");
const upload = require("../middlewares/multer");

router
.route("/")
.get(user.getAll)
.post(upload.single("avatar"), user.createUser);

router.get("/search?", user.getByName);

router
.route("/:id")
.get(user.getById)
.put(upload.single("avatar"), user.updateUser)
.delete(user.deleteUser);

module.exports = router;
