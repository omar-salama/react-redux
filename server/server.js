const express = require("express");
const morgan = require("morgan");
const path = require("path");
const userRouter = require("./users/user.route");

const app = express();

// images are served by NGINX on production.
if (process.env.NODE_ENV === "development") {
  app.use("/uploads", express.static("uploads"));
}

app.use(morgan("common"));
app.use(express.json());
app.use("/api", userRouter);

// handling Client-Side Routes.
if (process.env.NODE_ENV === "production") {
  app.get("/*", function (req, res) {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}

module.exports = app;
