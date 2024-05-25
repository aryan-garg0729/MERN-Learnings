/*
* convert js object to json
* store it in another file json2.json
* read file
* convert back json to js object
* print on console
 */

const fs = require("fs");

const obj = {
    name:"Aryan",
    age:20,
    channel:"AG Brothers"
};

const jsonFormat = JSON.stringify(obj)  //stringify converts js obj to json format
fs.writeFile("json2.json","\n"+jsonFormat,(err)=>{
    console.log(err);
});

let readData;
fs.readFile("json2.json","utf-8",(err,data)=>{
    console.log(data);
    readData = JSON.parse(data); //parse converts json to js obj
    console.log(readData);
})

