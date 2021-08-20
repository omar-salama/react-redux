import { config } from "dotenv";
import mongoose from "mongoose";

config();

const url = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@initialcluster.uen29.mongodb.net/RegisterMe?retryWrites=true&w=majority`;

export const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("Database connected...");
    return connection;
  } catch (err) {
    console.log(err.message);
  }
};
