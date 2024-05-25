//************************configuring dotenv file*********************************/
const dotenv = require("dotenv");
dotenv.config({path:"./.env"});

const port = process.env.PORT||3000;
/*************************requiring node modules**********************************/
const express  = require("express");
const path = require("path");
const app = express();

/*************************Database connection and model*****************************/
require("./db/conn");
const Register = require("./models/registers");

/**************************handlebars and bcrypt**************************************/
const hbs = require("hbs");
const bcrypt = require("bcryptjs");

/****************************Cookies and Authentication*****************************/
const cookieParser = require("cookie-parser");//to play with cookies
const auth = require("./middleware/auth")  //custom middleware for authentication

/********************************Important Paths************************************/
const staticPath = path.join(__dirname,"../public")  //for static website and css
const templatePath =path.join(__dirname,"../template/views")//to change 'views' to 'template'
const partialsPath = path.join(__dirname,"../template/partials")//path for 'partials'


app.use(express.json()); //to recognise data got by post request as json
app.use(express.urlencoded({extended:false}));//imp to get form data else gives undefined
app.use(cookieParser());

app.use(express.static(staticPath));
app.set('view engine',"hbs");
app.set("views",templatePath);
hbs.registerPartials(partialsPath);



app.get("/",(req,res)=>{
    res.render("index.hbs")
})
app.get("/login",(req,res)=>{
    res.render("login.hbs")
})
app.get("/register",(req,res)=>{
    res.render("register.hbs")
})
app.get("/secret",auth,(req,res)=>{    //'auth' is our custom middleware
    // console.log(`cookie data: ${req.cookies.jwt}`)
    res.render("secret.hbs")
})
app.get("*",(req,res)=>{
    res.render("404Error.hbs")
})

/********************************   Registeration   *************************************/
app.post("/register",async(req,res)=>{
    try {
        const password = req.body.password;
        const cpassword = req.body.confirm_password;
        if(password===cpassword){
            const registerEmp = new Register({
                name:req.body.name,
                phone:req.body.phone,
                gender:req.body.gender,
                email:req.body.email,
                password:password,
                confirmpassword:cpassword
            })
            const token = await registerEmp.generateAuthToken();
            console.log(token);

            // we need to hash our password using bcrypt after getting it from form and before saving in db this is done by a middleware present in registers.js

            // const result = await registerEmp.save(); //no need to call save here as it is called while token generation in register.js


        /************************************ COOKIES *******************************/
            // setting cookie with name "jwt" and value:token.At last we can set optional paramaters like expiry time etc.
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+30000), // expires in 30s after creation
                httpOnly:true  //client side scripting lang(like js) cannot affect our cookie
            });

            // res.status(201).send(result);
            res.status(201).render("login.hbs");
        }
        else{
            res.send("pass not matching")
        }
    } catch (e) {
        res.status(400).send(e);
    }
})

/*************************************   Login   *******************************************/
app.post("/login",async(req,res)=>{
    try {
        const password = req.body.password;
        const email = req.body.email;
        
        const user = await Register.findOne({email:email}); //if email is invalid then throws error and moves to catch

        // comparing password entered and password stored in db
        const passHash = user.password;
        const isMatch =await bcrypt.compare(password,passHash);

        //if password matches, give access
        if(isMatch){
        /*******generating token for authentication and creating cookie using token*********/
            const token = await user.generateAuthToken();
            console.log(token);
            res.cookie("jwt",token,{
                expires:new Date(Date.now()+30000), // expires in 30s after creation
                httpOnly:true,  //client side scripting lang(like js) cannot affect our cookie
                // secure:true //for https
            });
            res.status(201).render("secret.hbs");
        }
        else{
            /******************************** */
            res.cookie("jwt",undefined,{
                expires:new Date(Date.now()+30000), // expires in 30s after creation
                httpOnly:true,  //client side scripting lang(like js) cannot affect our cookie
                // secure:true //for https
            });
            res.send("invalid login details");
        }
        
    } catch (e) {

        //*************************** */
        res.cookie("jwt",undefined,{
            expires:new Date(Date.now()+30000), // expires in 30s after creation
            httpOnly:true,  //client side scripting lang(like js) cannot affect our cookie
            // secure:true //for https
        });


        res.status(400).send("invalid email");
    }
})


app.listen(port,()=>{
    console.log(`listening at ${port}`);
})