/*Streams are objects that let you read data from a source or write data to a destination in continous fashion

Each type of stream is an EventEmitter instance and throws several events eg:
 * data: it is fired when data is available to read
 * end: this event is fired when there is no more data to read
 * error: fired when there is error in recieving or writing data
 * finish: fired when all data has been flushed to underlying system
*/

const fs = require("fs");
const http = require("http")

const server = http.createServer();

server.on('request',(req,res)=>{
    //M1 getting all data at once
    // fs.readFile("input.txt","utf-8",(err,data)=>{
    //     if(err){
    //         return console.log(err);
    //     }
    //     res.end(data);
    // })

    //M2 streaming
    //create readable string and handle stream events=> data, end, error
    // const rstream = fs.createReadStream("inut.txt") //creating stream to read
    // rstream.on("data",(chunkdata)=>{ //if we have data
    //     res.write(chunkdata);
    // })
    // rstream.on("end",()=>{ // when reading is completed
    //     res.end();
    // })
    // rstream.on("error",(err)=>{ //when error in reading
    //     console.log(err);
    //     res.end("file not found...")
    // })

    //M3 pipe(best)
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);  //read from input.txt and write to res (response)
    rstream.on("error",(err)=>{ //when error in reading
        console.log(err);
        res.end("file not found...")
    });
});

server.listen(8000,"127.0.0.1");
