const userSchema = require('../model/user')

// Create and Save a new User
exports.create = async (req, res) => {

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
exports.findOne = async (req, res) => {
    await userSchema.findById(req.params.userId)
    // res.json(single_user);
    // console.log("UserID: " + req.params.userId)
    .then(oneUser => {
        if(!oneUser) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });            
        }
        res.json(oneUser);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.userId
        });
    });
};

// Update a User dats identified by the userId in the request
exports.update = async (req, res) => {

    // Find User and update it with the request body
    await userSchema.findByIdAndUpdate(req.params.userId, {
        name: req.body.name,
            role: req.body.role,
            date_joined: req.body.date_joined
    }, {new: true})
    .then(updateUser => {
        if(!updateUser) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.json(updateUser);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating User with id " + req.params.userId
        });
    });
};

// Delete a User with the specified userId in the request
exports.delete = async (req, res) => {
    await userSchema.findByIdAndRemove(req.params.userId)
    .then(delUser => {
        if(!delUser) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.params.userId
        });
    });
};