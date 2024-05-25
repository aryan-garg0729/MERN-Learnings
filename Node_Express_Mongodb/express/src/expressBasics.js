const express = require('express');
const app = express();
const port = 8000;

/*    types of request
  GET: whenever we want to fetch some data that is already present in the database
  POST: fetch some data processes it makes changes and then returns it
  PUT: fills some empty space
  PATCH: updates something
  DELETE: deletes some id provided

*/
app.get("/", (req, res) => {
    res.send("hello");
})
app.get("/html", (req, res) => {
    res.write("<h1>sending html</h1>");
    res.write("<h1>ending...</h1>");
    res.send();//to tell browser no more data to send
})

//sending json 
app.get("/temp", (req, res) => {

    /*both methods are same if an array or obj is passed,but res.json will also convert non
    objects such as null and undefined, which are not valid json */

    //M1
    // res.send([     //object converts to json behind the scene
    //     {
    //         id: 1,
    //         name: "Aryan"
    //     },
    //     {
    //         id: 1,
    //         name: "Aryan"
    //     },
    //     {
    //         id: 1,
    //         name: "Aryan"
    //     }
    // ])

    //M2
    res.json([     //object converts to json behind the scene
        {
            id: 1,
            name: "Aryan"
        },
        {
            id: 2,
            name: "Aryan"
        },
        {
            id: 3,
            name: "Aryan"
        }
    ])


})

app.get("/about", (req, res) => {
    res.send("hello about");
})
app.get("*", (req, res) => {
    res.status(404).send("err");
})


app.listen(port, () => {
    console.log(`listening at ${port}`);
})