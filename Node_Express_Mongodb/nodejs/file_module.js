const fs = require("fs");
                    // Sync file methods (wait until one completes then start next)
//creates file if not present , writes to file
fs.writeFileSync("read.txt","writing file synchronously");

fs.appendFileSync("read.txt" ,"\nappending: writing at end ,no overwritting");

const buf_data = fs.readFileSync("read.txt")
console.log(buf_data);
//outputs:  <Buffer 77 72 69 74 69 6e 67 20 66 69 6c 65 20 73 79 6e 63 68 72 6f 6e 6f 75 73 6c 79 0a 61 70 70 65 6e 64 69 6e 67 3a 20 77 72 69 74 69 6e 67 20 61 74 20 65 ... 19 more bytes>
/*Node.js has an additional datatype called 'Buffer'
  it is mainly used to store binary data,while reading from a file or recieving packets over the network.
*/

//converting binary buffer data to string 
org_data = buf_data.toString();
console.log(org_data);

//renaming file
// fs.renameSync("read.txt","readwrite.txt")



/*                           CHALLENGE - 1
    * create folder named aryan
    * create file named bio.txt in it and write data into it
    * append data to file
    * read data without getting buffer data first
    * rename file to mybio.txt
    * now delete both file and folder
 */
 /*
fs.mkdirSync("aryan");
fs.writeFileSync("aryan/bio.txt","file created...");
fs.appendFileSync("aryan/bio.txt","\nappending :)");
const data = fs.readFileSync("aryan/bio.txt","utf-8"); //reading and encoding
console.log(data);
fs.renameSync("aryan/bio.txt","aryan/mybio.txt");
fs.unlinkSync("aryan/mybio.txt") //deleting file
fs.rmdirSync("aryan") //deleting folder
*/

                    //Async file methods(don't wait for the task to complete)
//In async methods we must pass a callback function
fs.writeFile("read1.txt","async writing...",(err)=>{
    console.log(err);
});

fs.appendFile("read1.txt","\nappending to file :)",(err)=>{
    console.log(err);
});

fs.readFile("read1.txt","utf-8",(err,data)=>{
    console.log(data)
})

fs.rename("read1.txt","renamed.txt",(err)=>{
    console.log(err);
});

//                          CHALLENGE - 2 : do challenge 1 asynchronously
/*const callback = (err)=>{
    console.log(err);
}
fs.mkdir("aryan",callback);
fs.writeFile("aryan/bio.txt","writting...",callback);
fs.appendFile("aryan/bio.txt","appending (:",callback)
fs.readFile("aryan/bio.txt","utf-8",(err,data)=>{
    console.log(data);
})
fs.rename("aryan/bio.txt","aryan/mybio.txt",callback)
fs.unlink("aryan/mybio.txt",callback);
fs.rmdir("aryan",callback);*/