/* 
 * File Name:    books.js
 * Author:       Nadia Velikaia
 * Student ID:   301244426
 * Web App Name: Favourite Book List App
 */
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
