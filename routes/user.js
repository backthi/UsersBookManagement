const express = require('express')
const routes = express.Router()
const user_Schema = require('../model/user')
const userCont = require('../controller/user')

// routes.get('/', async(req,res) => {
//     try
//     {
//         const user = await userSchema.find()
//         res.json(user)
//     }catch(err){
//         res.send('Error ' + err)
//     }
// });

// routes.post('/', async(req,res) => {
//     const userData = new userSchema({
//         name: req.body.name,
//         role: req.body.role,
//         date_joined: req.body.date_joined
//     })
//     try{
//         const userData1 =  await userData.save() 
//         res.json(userData1)
//     }catch(err){
//         res.send('Error ' + err)
//     }
// });

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