"use strict";

const { userModel } = require("../models/user.model");

const getBook = (req, res) => {
  const { email } = req.query;
  userModel.findOne({ email: email }, (error, user) => {
    if (error) {
      res.send(error);
    } else {
      res.json(user);
    }
  });
};

const createBook = (req, res) => {
  const { email, bookName, bookDescription, bookStatus } = req.body;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      res.send(error);
    } else {
      userData.books.push({ name: bookName, description: bookDescription, status: bookStatus });
      userData.save();
      res.json(userData);
    }
  });
};

const deleteBook = (req, res) => {
  const bookIndex = req.params.book_idx;
  const { email } = req.query;

  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      res.send(error);
    } else {
      userData.books.splice(bookIndex, 1);
      userData.save();
      res.json(userData);
    }
  });
};

module.exports = { getBook, createBook, deleteBook };
