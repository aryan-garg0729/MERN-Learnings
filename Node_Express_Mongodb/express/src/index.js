const express = require('express');
const path = require("path")
const app = express();
const hbs = require("hbs") //for partials
const port = 8000;

// console.log(__dirname);
// console.log(path.join(__dirname,"../public"));

//static website
const staticPath = path.join(__dirname,"../public"); //getting absolute path to public folder

//                          Dynamic website
//our hbs must be in folder "views"(inbuilt keyword,our folder name must be 'views')
//to set 'view engine'(inbuilt keyword)
app.set('view engine',"hbs");

//changing the inbuilt behaviour: changing inbuilt name 'views' to 'custom_name'
const templatePath = path.join(__dirname,"../templates/views")
app.set('views',templatePath);

//partials : like components in react
const partialsPath = path.join(__dirname,"../templates/partials");
hbs.registerPartials(partialsPath)


//built in middle-ware
app.use(express.static(staticPath)) //by default renders index.html as home page to url "/"




app.get("/", (req, res) => {
    res.send("hello");
})
app.get("/dynamic",(req,res)=>{
    res.render("index",{
        data:"hjvjh"
    });
})
app.get("/about",(req,res)=>{
    console.log(req.query);
    //query string: http://www.abc.com/shoes?key1=val1&key2=val2&key3=val3
    //req.query gives an object of key value pairs: {key1:val1, key2:val2, key3:val3}

    // use this url: http://localhost:8000/about?name=aryan&age=100
    res.render("about",{
        name:req.query.name,
        age:req.query.age
    });
})
app.get("/about/*",(req,res)=>{
    res.send("this about us page don't exist...🤪")
})
app.get("*",(req,res)=>{
    res.render("404",{
        errorcomment:"Opps page could not be found..."
    })
})

app.listen(port, () => {
    console.log(`listening at ${port}`);
})

