const express = require("express");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/", function (req, res) {
  res.status(200).send({ hello: "world" });
});

app.post("/", function (req, res) {
  res.status(200).send({ hello: "world1" });
});

app.listen(port, () => console.log(`running on ${port} port`));
