const express = require('express')
const routesBook = express.Router()
const bookSchema = require('../model/books')
const bookCont = require('../controller/books')


// Add a new Book
routesBook.post('/', bookCont.create);

// Retrieve all Books
routesBook.get('/', bookCont.findAll);

// Retrieve a single Book with userId
routesBook.get('/:bookId', bookCont.findOne);

// Update a Book data with userId
routesBook.put('/:bookId', bookCont.update);

// Delete a Book with userId
routesBook.delete('/:bookId', bookCont.delete);


module.exports = routesBook