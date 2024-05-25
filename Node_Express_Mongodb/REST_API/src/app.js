const express = require('express');
require("./database/conn");
const Student = require("./models/students");
const studentRouter = require("./routers/students");

const app = express();
const port = process.env.PORT||8000

//middleware 
app.use(express.json()); //helps identify data as json

//3. we need to register our router
app.use(studentRouter);


app.listen(port,()=>{
    console.log(`listening ${port}`);
})