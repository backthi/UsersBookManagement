const bookSchema = require('../model/books')

// Add and Save a new Book
exports.create = async (req, res) => {

    //Add a Book Details
    const bookData = new bookSchema(
    {
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre,
        author: req.body.author,
        yearPublished: req.body.yearPublished,
        availabilityStatus: req.body.availabilityStatus,
        lastBorrower: req.body.lastBorrower
    });

    // Save Book in the database
    await bookData.save()
    .then(data => {
        res.json(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Book Data."
        });
    });
};

// Retrieve and return all books from the database.
exports.findAll = async (req, res) => {
    try
    {
        const book = await bookSchema.find()
        res.json(book)
    }
    catch(err){
        res.send('Book is deleted ' + err)
    }

};

// Find a single book with a bookID
exports.findOne = async (req, res) => {
    await bookSchema.findById(req.params.bookId)
    .then(oneBook => {
        if(!oneBook) {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });            
        }
        res.json(oneBook);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Book with id " + req.params.bookId
        });
    });
};

// Update a Book data identified by the bookId in the request
exports.update = async (req, res) => {

    // Find Book and update it with the request body
    await bookSchema.findByIdAndUpdate(req.params.bookId, {
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre,
        author: req.body.author,
        yearPublished: req.body.yearPublished,
        availabilityStatus: req.body.availabilityStatus, 
        lastBorrower: req.body.lastBorrower
    }, {new: true})
    .then(updateBook => {
        if(!updateBook) {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });
        }
        res.json(updateBook);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Error updating Book with id " + req.params.bookId
        });
    });
};

// Delete a Book with the specified bookId in the request
exports.delete = async (req, res) => {
    await bookSchema.findByIdAndRemove(req.params.bookId)
    .then(delBook => {
        if(!delBook) {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });
        }
        res.send({message: "Book deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Book with id " + req.params.bookId
        });
    });
};