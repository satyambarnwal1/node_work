//Asynchronous

const fs = require("fs");
// fs.writeFile('read2.txt','hi async',
// (err) => {
//     console.log("files created");
// });
fs.readFile("read2.txt","utf-8",
(err,data) => {
    console.log(data)
});
console.log("after data");

const { add } = require("./node1")
console.log(add(5,5))