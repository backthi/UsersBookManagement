const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    author: 
    {
        type: String,
        required: true
    },
    yearPublished: {
        type: String,
        required: true
    },
    availabilityStatus: {
        type: String,
        required: true
    },
    lastBorrower: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('bookSchema',booksSchema)