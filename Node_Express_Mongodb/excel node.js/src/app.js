//                                   getting data in object form
const xlsx = require('xlsx');
const workbook = xlsx.readFile("./a.xlsx");
// console.log(workbook);
let ws = {};
for(const sheetName of workbook.SheetNames){
    ws[sheetName] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
}
const data = ws.Sheet1; //obj






const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.urlencoded());

const index = fs.readFileSync("../public/index.html","utf-8");
const replaceVal = (index,val)=>{
    return index.replace("{%data%}",val);
}

app.get("/",(req,res)=>{
        res.send(index);
})
app.post('/',(req,res)=>{
    const target = req.body.search;
    const ans = data.filter((entry)=>{
        return (entry.name)==target;
    })
    const a = replaceVal(index,JSON.stringify(ans[0]));
    res.send(a);
})

app.listen(8000, () => {
    console.log(`listening at 8000`);
})
