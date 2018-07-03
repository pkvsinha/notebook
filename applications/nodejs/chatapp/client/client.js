const http = require('http');
const SERVER_HOST = 'localhost';
const SERVER_PORT = 4040;
var user = undefined;

function sendMessage( message ) {
    const req = http.request( {
        port : 4040,
        method : 'POST',
        path: '/chat' 
    }, (response) => {
        
    });
    req.write(""+message);
    req.end();
}

function login( username ) {
    const req = http.request( {
        port : 4040,
        method : 'POST',
        path : '/login' 
    }, (response) => {
        user = ("" + username).trim();
        chatPrompt();
    });
    req.write(""+username);
    req.end();
}

function loginPrompt() {
    process.stdout.write("\n username: ");
}

function chatPrompt() {
    process.stdout.write(user + ">");
}

function handleUserInput( data ) {
    if( !user ) {
        login( data );
    } else {
        sendMessage( data );
        chatPrompt();
    }
}
process.stdin.on('data', handleUserInput );
loginPrompt();