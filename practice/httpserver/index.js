const http = require("http")

const server = http.createServer((req,res)=>{
    if (req.url == "/"){
    res.end("hello from other side");
    }
    else if(req.url == "/about"){
        res.end("about page");
    }
    else{
        res.writeHead(404)
        res.end("404 error page");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port 8000")
})