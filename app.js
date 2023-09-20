const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const connectDB = require("./config/db");
const dotenv =require('dotenv')
const contact = require("./routes/contact")

dotenv.config();

const app = express();


//middlewares
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

//routes
app.use("/",contact);

//server configuration
// console.log(process.env.PORT);
const PORT = process.env.PORT || 8000

if(process.env.NODE_ENV === "production"){
    app.use(express.static("client/build"));
}


app.listen(PORT,
    async() => {
        try{
        await connectDB();
        console.log(`Server is listing on ${PORT}`)
        }
        catch(err){
            console.log(err);
        }
    }
);
