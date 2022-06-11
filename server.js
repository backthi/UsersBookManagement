const express = require("express");
const mongoose = require("mongoose");
const userRouter = require('./routes/user')
const dbConfig = require('./config/database.config.js');
require("dotenv/config");
const app = express();

app.use(express.json());

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(dbConfig.url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })


app.use('/user',userRouter)



//Listening port
app.listen(3000, () => {
    console.log("Listening to 3000")
});


