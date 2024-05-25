/*
Node.js has a built-in module called 'Events' where we can create, fire and listen our events
Eg 1: Registering for the event to be fired only one time using once
Eg 2: Register a couple of callbacks
Eg 3: event with callback paramaters
*/
const EventEmitter = require("events");
const event = new EventEmitter();

// Eg1
// event.on("sayMyName",()=>{
//     console.log("AG");
// })
// event.emit('sayMyName');


//Eg2 same name many function calls
// event.on("sayMyName",()=>{
//     console.log("AG");
// })
// event.on("sayMyName",()=>{
//     console.log("Aryan ");
// })
// event.on("sayMyName",()=>{
//     console.log("Garg");
// })
// event.emit('sayMyName');


// Eg 3
// event.on("checkPage",(statusCode,msg)=>{
//     console.log(`status code = ${statusCode}, msg = ${msg} `)
// })
// event.emit("checkPage",200,"ok")