const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const users = express();

users.use(express.json());

users.get("/", (req, res) => {
    res.send("First API !!!")
});

users.get("/users", (req, res) => {
    let userNames = ["User1", "User2", "User3"]
    res.send({
        users: userNames,
    });
})

users.post("/create_user", (req, res) =>{
    console.log(req.body.name)
    res.send(`Created User Name: ${req.body.name}`);
});

mongoose.connect(process.env.DB_CONECTION_STRING, (req, res) => {
    console.log("Connected to DB")
})

//Listening port
users.listen(3000, () => {
    console.log("Listening to 3000")
});


