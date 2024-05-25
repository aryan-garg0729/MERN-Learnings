ents/:id",async(req,res)=>{

    try{
        const _id = req.params.id;
        const result = await Student.findById(_id);
        res.status(200).send(result);
        console.log(result);
    }
    catch(e){
        res.status(400).send(e);
    }

});