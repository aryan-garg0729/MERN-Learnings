const express = require('express');
require("./database/conn");
const router = require("./routers/router")

const app = express();
const port = process.env.PORT||8000

//middleware
app.use(express.json());
//router to keep app.js clean
app.use(router);

app.listen(port,()=>{
    console.log(`listening ${port}`);
})