const http = require('http');
const fs = require('fs');
var requests = require("requests")

const homeFile = fs.readFileSync('home.html','utf-8');
const replaceVal = (tempVal,orgVal)=>{
    let temprature = tempVal.replace("{% tempval %}",orgVal.list[0].main.temp);
    temprature = temprature.replace("{% location %}",orgVal.city.name);
    temprature = temprature.replace("{% country %}",orgVal.city.country);
    console.log(typeof temprature)
    return temprature
};

const server = http.createServer((req,res)=>{
    if (req.url == "/"){
       requests(
        // "https://api.openweathermap.org/data/3.0/onecall?lat=13.03&lon=77.06&exclude={part}&appid=873d03ac9f26051f1d887a6791aba134"   // expired
        "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=f524b3a1a563b4f041602e4d169507b1",
       )
       .on("data",(chunk)=>{
        // const st = JSON.stringify(chunk)
        const objdata = JSON.parse(chunk);
        const arrdata = [objdata];
        // console.log(Array.isArray[arrdata])
        // console.log(typeof chunk)
        const realtimedata = arrdata.map((val) =>  replaceVal(homeFile,val));
        // console.log(val.list[0].main.temp));
        // replaceVal(homeFile,val));
        // console.log(val.list[0].main.temp));
        // console.log(arrdata[0]['list'][0])
        // console.log(realtimedata[0])
        res.write(realtimedata[0])


        // console.log(arrdata[0]['city']['name'])
        // console.log(arrdata[0]['city']['country'])
        // console.log(arrdata[0]['list'][0]['main']['temp'])
       })
       .on("end",()=>{
        res.end();
        console.log('end')
       })
    }
})

server.listen(8000,"127.0.0.1")