// Import the built-in 'http' module from Node.js
// This module allows us to create an HTTP server
const http = require("http");

// Create a server using the 'http.createServer' method
// It takes a callback function (request, response)
// - 'req' -> represents the request from the client (browser, Postman, etc.)
// - 'res' -> represents the response we send back to the client
const server = http.createServer((req, res) => {
  // 'res.end()' is used to send a response and end the request
  res.end("Hello, from the server");
});

// Start the server and make it listen on port 8000
// '127.0.0.1' is the localhost (your own computer)

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});

//1)http module → Node.js has a built-in http module for creating web servers (no need to install).

//2)createServer() → Creates a server that listens to requests and sends responses.

//3)req (request) → Contains info like URL, headers, method (GET, POST, etc.).

//4)res (response) → Used to send data back to the client (like res.writeHead(), res.end()).

//5)listen() → Binds the server to a port (8000 here).

//127.0.0.1 means local machine (loopback IP).

//If you want others on the network to access, you can use "0.0.0.0".

//6)Non-blocking nature → Node.js can handle many requests without creating new threads (event-driven).
