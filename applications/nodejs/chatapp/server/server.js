const http = require('http');

const server = http.createServer();

server.on('request', (request,response) => {
    
    let body = [];
    request.on('data', ( chunk ) => {
        console.log("received data " + chunk);
        body.push( chunk );
    }).on('end', ()=> {
        body = Buffer.concat(body).toString('ascii');
        console.log("Received request for : " + body );
        response.writeHead(200);
        response.end();
    });
    
});

server.listen(4040);
console.log("Server started at 4040");