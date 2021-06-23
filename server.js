const express = require("express");
const app = express();
const mongoose = require("mongoose");
const getBook = require("./controller/book.controller");

const indexController = require("./controller/index.controller");

require("dotenv").config();
const PORT = process.env.PORT;

const seedUserData = require("./models/user.model");
const axios = require("axios");
const cors = require("cors");

app.use(cors());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

// seedUserData();

app.get("/", indexController);
app.get("/books", getBook);
app.listen(PORT, () => console.log(`listening ${PORT}`));