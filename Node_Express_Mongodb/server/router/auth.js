/*************************requiring dependencies****************************/
const express = require('express');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

/*****************************Database and model*****************************/
require('../db/conn')
const User = require('../model/userSchema');  //user Schema


/**********************************Requests***********************************/
router.get("/",(req,res)=>{
    // res.cookie("ASD","sdfdsf");
    res.send("hello");
})


/******************************** USER REGISTERATION *************************/
router.post("/register",async(req,res)=>{
    console.log(req.body);
    const {name,phone,email,work,password,cpassword} = req.body;

    //checking if all feilds are filled
    if(!name || !phone || !email || !work || !password || !cpassword){
        return res.status(422).json({error:"unfilled fields"})
    }

    //checking pass and confirm pass match
    if(password!==cpassword){
        return res.status(422).json({error:"password and confirm password mismatch.."})
    }

    try {
        //checking if email already exist
        const isFound = await User.findOne({email:email});
        if(isFound){
            return res.status(422).json({error: "email already exist"});
        }

        // creating new user
        const user = new User({name,phone,email,work,password,cpassword});

        //after creating document and before saving we must hash password and it is done via a middleware in userSchema.js

        //storing in database
        const result = await user.save();
        res.send(result);
        

    } catch (e) {
        res.status(400).send(e);
    }

})

/*********************************** USER LOGIN **************************/
router.post("/login",async(req,res)=>{

    const {email,password} = req.body;

    //checking empty fields
    if(!email || !password){
        return res.status(400).json({error:"unfilled fields"});
    }

    try {
        const dbUser = await User.findOne({email:email});
        //checking if email is valid
        if(!dbUser){
            return res.status(404).send("invalid credentials");
        }

        //checking password
        const isMatch = await bcrypt.compare(password,dbUser.password);

        //token and cookie generation
        const token = await dbUser.generateAuthToken();
        console.log(token);
        res.cookie("jwt",token,{
            expires: new Date(Date.now()+2592000000),
            httpOnly:true
        })

        if(isMatch){
            return res.status(200).send("access granted");
        }
        res.status(404).send("invalid credentials");
    } 
    catch (e) {
        res.status(400).send(e);
    }
})

module.exports = router;