const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    date_joined: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('userSchema',userSchema)