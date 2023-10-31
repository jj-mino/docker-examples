// Import the express module
const express = require("express");

// Create an instance of the express application
const app = express();

// Define a port number for the server to listen on
const port = 3000;

// Define a route handler for the root path
app.get("/", (req, res) => {
  // Send a response with "Hello World"
  res.send("Hello World");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is ready
  console.log(`Example app listening at http://localhost:${port}`);
});
