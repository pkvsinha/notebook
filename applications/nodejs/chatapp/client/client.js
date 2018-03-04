const http = require('http');
const SERVER_HOST = 'localhost';
const SERVER_PORT = 4040;
var options = {

}

function sendMessage( message ) {
    var request = http.request( options, (response) => {
        console.log("Mesage sent");
    });
}

function login( username ) {
    const req = http.request( {
        port : 4040,
        method : 'POST' 
    }, (response) => {
        console.log("server logged in");
    });
    req.write(""+username);
    req.end();
}

function loginPrompt() {
    process.stdout.write("\n username: ");
    process.stdin.on('data', (data)=>{
        login( data );
        process.stdin.pause();
    });
}

loginPrompt();