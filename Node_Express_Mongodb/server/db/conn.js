const mongoose = require('mongoose');

//Connection MongoDB Atlas
const DB = process.env.DATABASE;  //DATABASE is in dotenv file
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('connection successful...')
}).catch((e)=>{
    console.log(e);
})
