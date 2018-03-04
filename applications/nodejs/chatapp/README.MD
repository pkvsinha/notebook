# Chat App
---

An application to allow users to send message to another. Here I will be using the prototype model to develop this piece of software.

## Requirement Analysis
We need a client application , which has the ability to send message to another client. Client can esnd any kind of message - text, file, video etc. The connnection should be secure, that is intended party can only see the messages.

## Design
For a client to connect to another client, we need to first make a tunnel to etablish connection between them.
HTTP is used for all commnication.

Server - 
    * Should enable client to connect with each other  
        * Client will connect to server - to know the exitence of the client. If the client exists, the server etablished the connection.
        * Server has initiate the connection with other client.
    * Should identify the clients - that is provide some id.
Client
    * Should allow user to enter data.
    * Should allow user to find active uusers and start a chat with them.