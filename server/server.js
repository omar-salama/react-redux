const express = require("express");
const morgan = require("morgan");
const userRouter = require("./users/user.route");

const app = express();

// images are served by NGINX on production.
if (process.env.NODE_ENV === "development") {
  app.use("/uploads", express.static("uploads"));
}

app.use(morgan("common"));
app.use(express.json());
app.use("/api/user", userRouter);

module.exports = app;
