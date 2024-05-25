const mongoose = require("mongoose");
const validator = require("validator");

// 127.0.0.1 -->localhost, 27017 --> port, AGBrothers -->db name , using 'then', 'catch' as it returns promise
//by this we are connecting or creating new database and connecting 
mongoose.connect("mongodb://127.0.0.1:27017/AGBrothers", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() => {
    console.log(`connection successful`);
}).catch((error) => {
    console.log(`Connection Error ${error}`);
})

//Schema defines the structure of document ,default values, validators etc.
//by this we can create document
const playlistSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique:true , //unique is not a validator
        uppercase: true //validator
    },
    ctype:{
        type: String,
        //validators (inbuilt)
        lowercase:true,
        enum:["frontend","backend","database"] // value of ctype must be one of these
    },
    videos:{
        type:Number,
        //custom validators:-
        //M1
        validate(value){
            if(value<0){
                throw new Error("video count must be > 0");
            }
        }

        //M2
        // validate : {
        //     validator:function(value){
        //         return value.length>0;
        //     },
        //     message:"video count must be > 0"
        // }

    },
    author:String,

    // email:{
    //     type:String,
    //     validate(value){
    //         // validation using npm package
    //         if(!validator.isEmail(value)){
    //             throw new Error("Invalid email :(");
    //         }
    //     }
    // },

    active:Boolean,
    date: {
        //setting type and default value
        type:Date,  
        default:Date.now
    }
})

//by Mongoose model we create collections.
//database-->collections(tables)-->documents(entries)
//Mongoose model is a wrapper on mongoose schema
//creating class and telling "collection name" and "schema" it follows
const Playlist = new mongoose.model("Playlist",playlistSchema);  


const createDocument = async ()=>{
    try{
        //create document or insert one
        const reactPlaylist = new Playlist({
            name:"NodeJs",
            ctype:"BackEnd",
            videos:87,
            // email:"sdf@nsut.ac.in",
            author:"Aryan",
            active:true,
            //if we don't specify date then it will take default value
        })
        const result = await reactPlaylist.save();
        console.log(result);

        //inserting many
        /*const mongo = new Playlist({
            name:"mongo",
            ctype:"database",
            videos:23,
            author:"Aryan",
            active:true,
            //if we don't specify date then it will take default value
        })
        const js = new Playlist({
            name:"Js",
            ctype:"BackEnd",
            videos:87,
            author:"Aryan",
            active:true,
            //if we don't specify date then it will take default value
        })
        const bootstrap = new Playlist({
            name:"bootstrap",
            ctype:"frontEnd",
            videos:12,
            author:"Aryan",
            active:true,
            //if we don't specify date then it will take default value
        })
        const result = await Playlist.insertMany([js,mongo,bootstrap]); //pass array of doc
        console.log(result);*/
    }
    catch(err){
        console.log(err);
    }
}
// createDocument();


//reading
const getDocument = async ()=>{
    try {
        const result = await Playlist
        .find({ctype:"BackEnd"})
        .select({name:1,date:1,_id:0})
        .limit(2);
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}
// getDocument();

// comparision query operator
/*
$gt: greater than
$gte: greater than equal
$lt: less than
$lte: less than equal
$eq: equal
$neq: not equal
$in: matches any specific value in array
$nin: not in
*/
const comparision = async ()=>{
    try {
        const result = await Playlist
        .find({videos: {$gt:50}})
        .select({name:1,date:1,_id:0})
        console.log(result);

        const result2 = await Playlist
        .find({ctype: {$in:["BackEnd","frontEnd"]}})
        .select({name:1,date:1,_id:0})
        console.log("\n",result2);
    }
    catch (error) {
        console.log(error);
    }
}
// comparision();


//logical operator
/*
$and
$or
$not
$nor
 */
const logical = async ()=>{
    try {
        const result = await Playlist
        .find({$and:[{ctype:"frontEnd"},{author:"Aryan"}]})
        .select({name:1,date:1,_id:0})
        console.log(result);
    }
    catch (error) {
        console.log(error);
    }
}
// logical();


//countdocument() and sort()
const count_sort = async ()=>{
    try {
        const result = await Playlist
        .find({ctype:"BackEnd"})
        .select({name:1,date:1,_id:0}).countDocuments();
        console.log(result);

        const result2 = await Playlist
        .find({author:"Aryan"})
        .select({name:1,date:1,_id:0}).sort({name:1}); //1-->asc, -1-->desc
        console.log(result2);
    }
    catch (error) {
        console.log(error);
    }
}
// count_sort();


//updating document
const updateDoc =async (id)=>{
    try {
        //updateOne and updateMany return the number of doc modified
        let result = await Playlist.updateOne({_id:id},{
            $set:{
                name:'React Js',
                videos:90
            }
        });
        console.log(result);

        //findByIdAndUpdate returns the document before modification
        result = await Playlist.findByIdAndUpdate({_id:id},{
            $set:{
                name:'React Js',
                videos:90
            }},
            {
                new:true //now it will return the updated document
            }
        );
        
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// updateDoc('647ee17c9e2d8a4803449d16')  //id of reactJs


//Delete Document
const deleteDoc = async(_id)=>{
    try {
        //deleteOne and deleteMany return the number of doc modified
        // let result = await Playlist.deleteOne({_id});
        // console.log(result);

        //findByIdAndDelete returns the document before modification
        result = await Playlist.findByIdAndDelete({_id});
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
// deleteDoc('6480253b238b7d7fbea02fa9')

