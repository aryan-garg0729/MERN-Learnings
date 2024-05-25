//************************configuring dotenv file*********************************/
const dotenv = require("dotenv");
dotenv.config({path:"./.env"});

const port = process.env.PORT||3000;

/*********************************Express*******************************************/
const express = require("express");
const app = express();

/****************************** Router to handle requests **************************/
const router = require('./router/auth'); //to keep app.js clean

/***********************************Database*****************************************/
require('./db/conn');  //connection


/***********************************Middlewares**************************************/
app.use(express.json());
app.use(router); //linking our router files


/*const middleware = (req,res,next)=>{ //custom middleware
    console.log("middleware");
    next();
}
app.get("/about",middleware,(req,res)=>{
    res.send("hello about");
})*/



app.listen(port,()=>{
    console.log(`listening at ${port}`);
})