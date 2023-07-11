const express = require('express')
const mysql = require("mysql");
const http = require("http");
const app = express()
const cors = require('cors');

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "game",
  password: "",
});

// Parse URL-encoded bodies (as sent by HTML forms)

app.use(express.urlencoded());
// Parse JSON bodies (as sent by API clients)

// Middleware to parse request body as JSON
app.use(express.json());

app.use(cors({
  origin: '*'
}));

app.get('/getUsers', async (request, response) => {
  response.send('Hello World!')
})

app.get('/characters', async (request, response) => {

  pool.query("SELECT * FROM characters", function (err, result, fields) {
    if (err) throw err;
    response.send(result);
  });

})

app.post

app.listen(3005, () => {
  console.log(`App running on: http://localhost:${3005}`)
});


