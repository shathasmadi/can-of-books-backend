"use strict";

const mongoose = require("mongoose");
const bookSchema = require("./book.model");

const userScheme = new mongoose.Schema({
    email: { type: String },
    books: [bookSchema],
});

const userModel = mongoose.model("user", userScheme);

const seedUserData = () => {
    const newUser = new userModel({
        email: "archaseel.1992@gmail.com",
        books: [
            { name: "Harry Potter", description: "Fantasia", status: "New" },
            { name: "the prince", description: "Political", status: "Used" },
            { name: "Angel And Demon", description: "Novel", status: "New" },
        ],
    });
    console.log(newUser);
    newUser.save();
};
seedUserData();
module.exports = userModel;