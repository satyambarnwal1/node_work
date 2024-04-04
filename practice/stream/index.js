const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request', function(req,res)
// or we can write server.on('request', (req,res)=>
{
    const rstream = fs.createReadStream('stream/input.txt')
// 1st way of doing this
    // rstream.on('data',(chunkdata) => {
    //     res.write(chunkdata)

    // })
    // rstream.on('end', () => {
    //     res.end()
    // })

// 2nd way of doing this more efficient
   rstream.pipe(res);

//    for error handing if file not exist
    rstream.on('error',(err)=>{
        console.log(err);
        res.end("file not found");
    });
});

server.listen(8000,"127.0.0.1");