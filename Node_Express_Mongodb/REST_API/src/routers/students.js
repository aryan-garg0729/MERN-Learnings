const express = require("express");
const Student = require("../models/students");

// using router to keep our app.js clean
//1. create a new router
const router = new express.Router();

//2. we need to define the router
router.get("/mrGarg",(req,res)=>{
    res.send("hello");
})

//3. we need to register our router (to be done in app.js)
// app.use(router);





//                         Create new Document and Store in database


// M1: then catch
// router.post("/students",(req,res)=>{
//     const user = new Student(req.body);
//     console.log(user);

//     user.save().then(()=>{
//         res.status(201).send(user);   // status code 201 --> doc created
//     }).catch((e)=>{
//         res.status(400).send(e); 
//     })

// });


//M2 async await(better)
router.post("/students",async(req,res)=>{

    try{
        //create document or insert one
        const user = new Student(req.body);
        console.log(user);
        const result = await user.save();
        res.status(201).send(result);
        console.log(result);
    }
    catch(e){
        res.status(400).send(e);
    }

});


//                          Read data of registered students
router.get("/students",async(req,res)=>{

    try{
        const result = await Student.find();
        res.status(200).send(result);
        console.log(result);
    }
    catch(e){
        res.status(400).send(e);
    }

});



//                          Read data of individual student using id
// router.get("/students/:id",async(req,res)=>{

//     try{
//         const _id = req.params.id;
//         const result = await Student.findById(_id);
//         res.status(200).send(result);
//         console.log(result);
//     }
//     catch(e){
//         res.status(400).send(e);
//     }

// });



//                          Read data of individual student using email
router.get("/students/:email",async(req,res)=>{

    try{
        const email = req.params.email;
        const result = await Student.find({email:email});
        res.status(200).send(result);
        console.log(result);
    }
    catch(e){
        res.status(400).send(e);
    }

});



//                      update by id
router.patch("/students/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const result = await Student.findByIdAndUpdate(_id,req.body,{
            new:true  //to get the updated document in result
        });
        res.send(result);
    }
    catch(e){
        res.status(400).send(e);
    }
})



//                      delete the student by id
router.delete("/students/:id",async(req,res)=>{
    try{
        const result = await Student.findByIdAndDelete(req.params.id);
        if(!req.params.id){
            return res.status(400).send();
        }
        res.send(result);
    }
    catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;