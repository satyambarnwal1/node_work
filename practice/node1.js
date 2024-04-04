console.log("hi nodejs")
// synchronous
const fs = require("fs"); //Use in build module fs 
//fs.writeFileSync("read.txt","Hi node")
//fs.appendFileSync("read.txt", " how are you")

// buffer used to store binary data
const buf_data = fs.readFileSync("read.txt")
console.log(buf_data)

org_data = buf_data.toString()
console.log(org_data)

// import export our own module define function
const add = (a,b) => {
    return a+b;
};
module.exports = { add };