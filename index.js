const express = require("express");
const morgan = require("morgan");
const cors = require("cors")
const connectDB = require("./config/db");
const dotenv =require('dotenv')
const contact = require("./routes/contact")

dotenv.config();

const app = express();

app.options('*', (req, res) => {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', 'https://cms-frontend-chi.vercel.app/');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Respond with a 200 status for preflight requests
    res.sendStatus(200);
});

mongoose.set('strictQuery', false);


//middlewares
app.use(cors());
app.use(morgan("tiny"));
app.use(express.json());

//routes
app.use("/",contact);

app.get("/",(req,res)=>{
    res.send("working");
})

//server configuration
// console.log(process.env.PORT);
const PORT = process.env.PORT || 8000



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
