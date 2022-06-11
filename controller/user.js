const userSchema = require('../model/user')

// Create and Save a new User
exports.create = async (req, res) => {
    // // Validate request
    // if(!req.body.content) {
    //     return res.status(400).send({
    //         message: "User content can not be empty"
    //     });
    // }

    // Create a User
    const userData = new userSchema(
        {
            name: req.body.name,
            role: req.body.role,
            date_joined: req.body.date_joined
        })
        try{
            const userData1 =  await userData.save() 
            res.json(userData1)
        }catch(err){
            res.send('Error ' + err)
        }
    // const userData = new userSchema(
    // {
    //     name: req.body.name,
    //     role: req.body.role,
    //     date_joined: req.body.date_joined
    // });

    // // Save User in the database
    // userData.save()
    // .then(data => {
    //     res.send(data);
    // }).catch(err => {
    //     res.status(500).send({
    //         message: err.message || "Some error occurred while creating the User."
    //     });
    // });
};

// Retrieve and return all user from the database.
exports.findAll = async (req, res) => {
    try
    {
        const user = await userSchema.find()
        res.json(user)
    }
    catch(err){
        res.send('Error ' + err)
    }

};

// Find a single User with a userID
exports.findOne = (req, res) => {

};

// Update a User dats identified by the userId in the request
exports.update = (req, res) => {

};

// Delete a User with the specified userId in the request
exports.delete = (req, res) => {

};