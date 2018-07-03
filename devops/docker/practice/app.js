const http = require('http');
const server = http.createServer();

server.on('request', ( request, response ) => {
  const { headers, method, url } = request;

  let body = [];
  request.on('error', (error)=>{
    console.error("Error processing request : ", error);
  }).on('data', (chunk)=>{
    body.push(chunk);
  }).on('end', ()=> {
    body = Buffer.concat(body).toString();
  });

  response.writeHead(200,{
    'Content-Type' : 'text/html'
  });

  response.end('<html><body><h1>Hello World!</h1></body></html>');
});

server.on('error', (error)=> {
  console.error("Error has occured => ", error );
});

server.listen(8080);
console.log("Server Started at port 8080");
