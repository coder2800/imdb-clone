const mongoose = require("mongoose");

const uri = "mongodb+srv://devanshagarwal100:E4C4fYooOdOY8Jsk@cluster0.9v3c1ue.mongodb.net/"

const connectToMongo = ()=>{
    mongoose.connect(uri)
    .then(console.log("Connected to mongoDB"));
}

module.exports = connectToMongo