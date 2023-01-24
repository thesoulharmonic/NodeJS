const express = require("express");

const App = express();

App.get("/"); // sets up URL via express for navigation
App.get("/about"); // another page url

// request - ursers incoming data
// response - your outgoing data

App.get("/", (request, response) => {
  // call back function deals with the request

  readfFile("./home.html", "utf8", (err, html) => {
    // calls the html file related to URL
    if (err) {
      response.status(500).send("sorry, out of order"); // if there is an error send 500 response
    }
    response.send(html);
  });
});

App.listen(process.env.PORT || 3000, () => (console.log(`App available ofn http://localhost:3000`))) // add a port for express to listen for instructions
// logs that app is available on localhost port 3000

const { readFile } = require('fs').promises; // use promises to avoid call back hell

App.get('/', async (request, response) => {
    response.send(await readFile("./home.html", "utf8")); // better to do it via a promise 
})

// can use google App Engine

// depay with gcloud app deplay