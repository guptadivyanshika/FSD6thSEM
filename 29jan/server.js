const http=require('http');
const server = http.createServer((req,res)=>{
  res.statusCode=200;
  res.setHeader("Content-type","text/plain");
  res.end("welcometo the node.js tut");
});

server.listen(3000,()=>{
  console.log("server is running on http://localhost:3000");
});