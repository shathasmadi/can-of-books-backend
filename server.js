const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { getBook, createBook, deleteBook } = require("./controller/book.controller");

const indexController = require("./controller/index.controller");

require("dotenv").config();
const PORT = process.env.PORT;

const { seedUserData } = require("./models/user.model");
const axios = require("axios");
const cors = require("cors");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/myFavoriteBooks", { useNewUrlParser: true, useUnifiedTopology: true });

seedUserData();

app.get("/", indexController);
app.get("/books", getBook);
app.post("/book", createBook);
app.delete("/book/:book_idx", deleteBook);

app.listen(PORT, () => console.log(`listening ${PORT}`));
