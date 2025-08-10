const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
app.use(express.json());

//in memory db
const bookstore = [
  { id: 1, book: "dsa", author: "striver" },
  { id: 2, book: "js", author: "ran" },
  { id: 3, book: "python", author: "dom" },
];
app.get("/", function (req, res) {
  res.status(200).send({ msg: "book store" });
});

app.get("/books", (req, res) => {
  res.status(200).send({ msg: { bookstore } });
});

app.get("/books/:id", (req, res) => {
  //   res.setHeader("x-jay", "jaysan"); // x- is a convention to add custom headers
  const id = parseInt(req.params.id, 10);
  if (isNaN(id)) {
    return res.status(400).send({ error: "not a number type" });
  }
  const book = bookstore.find((e) => e.id === id);
  if (!book) {
    return res.status(404).send({ error: "not found" });
  } else res.status(200).send({ msg: { book } });
});

app.post("/books", (req, res) => {
  return res.status(200).send({ msg: "this route is under developement" });
});

app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({
    error: err.message || "Internal Server Error",
  });
});

app.listen(port, () => {
  console.log(`running on ${port} port`);
});
