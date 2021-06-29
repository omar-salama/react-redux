const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose");
const url =
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@initialcluster.uen29.mongodb.net/RegisterMe?retryWrites=true&w=majority`;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useFindAndModify', false);