const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

require("./db_connection");
const User = require("./users.model");

app.use(express.json());

app.get("/users", (req, res) => {
  User.find({})
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err.message);
    });
});
app.get("/users/name/:name", (req, res) => {
  const name = req.params.name;
  User.find({ name: name })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});
app.get("/users/:id", (req, res) => {
  const _id = req.params.id;
  User.findById({ _id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});
app.post("/users", (req, res) => {
  let { body } = req;
  let user = new User(body);
  user
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((err) => {
      res.status(400).json(err.message);
    });
});

app.patch("/users/:id", (req, res) => {
  const _id = req.params.id;
  const { body } = req;
  User.findByIdAndUpdate(_id, body)
    .then(() => res.status(200).json())
    .catch((err) => res.status(400).json(err.message));
});

app.delete("/users/:id", (req, res) => {
  const _id = req.params.id;
  User.findByIdAndDelete(_id)
    .then(() => res.status(200).json())
    .catch((err) => res.status(400).json(err.message));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
