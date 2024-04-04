const EventEmitter = require("events");
const event = new EventEmitter();

event.on('saymyname', ()=>{
    console.log("hi satyam")
})

event.on('saymyname2', ()=>{
    console.log("hi satyam2")
})

event.emit("saymyname")

event.on('name_age', (sc,msg)=>{
    console.log(`hi ${sc} and age ${msg}`)   // use backticks ``
})

event.emit("name_age","satyam",25)
