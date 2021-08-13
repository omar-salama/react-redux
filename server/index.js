const express = require("express");
const morgan = require("morgan");
const path = require("path");
require("./db_connection");

const PORT = process.env.PORT || 3001;
const app = express();

// images are served by NGINX on production.
if (process.env.NODE_ENV === "development") {
  app.use("/uploads", express.static("uploads"));
}

app.use(morgan("common"));
app.use(express.json());
app.use("/api", require("./users/user.route"))

// handling Client-Side Routes.
if (process.env.NODE_ENV === "production") {
  app.get("/*", function (req, res) {
    res.sendFile(
      path.resolve(__dirname, "..", "client", "build", "index.html")
    );
  });
}
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
