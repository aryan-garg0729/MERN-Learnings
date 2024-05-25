const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{

    const data = fs.readFileSync('json1.json',"utf-8")
    const obj = JSON.parse(data);
    console.log(obj)

    if(req.url == "/"){
        res.end('hello server is responding');
    }
    else if(req.url=="/about"){
        res.end("hello from about us page")
    }
    else if(req.url=="/contact"){
        res.end("hello from contact us page")
    }
    else if(req.url=="/user"){
        //to prevent reading everytime it is done on top
        /*fs.readFile('json1.json',"utf-8",(err,data)=>{
            console.log(data);
        })*/
        
        res.writeHead(200,{"Content-type":"application/json"})
        res.end(obj[2].name)
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"}) //telling browser the status code and type of file we are playing with
        res.end("<h1>404 Error</h1>")
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to port no 8000")
});

