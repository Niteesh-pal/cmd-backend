const mongoose = require("mongoose")
const dotenv = require('dotenv')
dotenv.config();

const connectDB = async()=>{
    return mongoose.connect(process.env.DB)
    .then(()=>{console.log("database Connected succesfully")})
    .catch(err=>
        {   console.log("could not connect to database \n")
            console.log(err)
        });
}

module.exports = connectDB;