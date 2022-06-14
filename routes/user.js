const express = require('express')
const routes = express.Router()
const user_Schema = require('../model/user')
const userCont = require('../controller/user')


// Create a new User
routes.post('/', userCont.create);

// Retrieve all Users
routes.get('/', userCont.findAll);

// Retrieve a single User with userId
routes.get('/:userId', userCont.findOne);

// Update a User data with userId
routes.put('/:userId', userCont.update);

// Delete a User with userId
routes.delete('/:userId', userCont.delete);


module.exports = routes