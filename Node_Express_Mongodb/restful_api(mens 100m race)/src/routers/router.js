const express = require("express");
const MensRanking = require("../models/mens");

const router = new express.Router();

router.post("/mens",async(req,res)=>{

    try {
        const runner = new MensRanking(req.body);
        const result = await runner.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
    
})
router.get("/mens",async(req,res)=>{

    try {
        const result = await MensRanking.find().sort({"ranking":1});
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
    
})
router.get("/mens/:id",async(req,res)=>{

    try {
        const _id  = req.params.id;
        const result = await MensRanking.findById(_id);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send(error);
    }
    
})
router.patch("/mens/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const result = await MensRanking.findByIdAndUpdate(_id,req.body,{
            new:true  //to get the updated document in result
        });
        res.send(result);
    }
    catch(e){
        res.status(400).send(e);
    }
})
router.delete("/mens/:id",async(req,res)=>{
    try{
        const result = await MensRanking.findByIdAndDelete(req.params.id);
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