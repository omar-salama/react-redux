import express from "express";
import morgan from "morgan";
import userRouter from "./users/user.route.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// images are served by NGINX on production.
if (process.env.NODE_ENV === "development") {
  app.use("/uploads", express.static("uploads"));
}

app.set('trust proxy', 'loopback');
app.use(morgan("common"));
app.use(express.json());
app.use("/api/user", userRouter);
app.use(errorHandler);

export default app;
