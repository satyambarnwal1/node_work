const biodata = {
    name : "satyam",
    age : 26
};
const json = JSON.stringify(biodata)    //{"name":"satyam","age":26}
console.log(json)
const obj = JSON.parse(json)
console.log(obj)                        //{ name: 'satyam', age: 26 }