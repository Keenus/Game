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
  console.log('qwe')
  pool.query("SELECT * FROM characters", function (err, result, fields) {
    if (err) throw err;
    response.send(result);
  });

})

app.get('/getUserActions', async (request, response) => {
  pool.query("SELECT * FROM useractions", function (err, result, fields) {
    if (err) throw err;
    response.send(result);
  });

})

app.post('/addUserActions', async (request, response) => {
  console.log('Request body:', request.body);

  // Convert dates to UTC
  const startDateUTC = new Date(request.body.startDate).toISOString().slice(0, 19).replace('T', ' ');
  const endDateUTC = new Date(request.body.endDate).toISOString().slice(0, 19).replace('T', ' ');

  // Use prepared statement for safe queries
  const query = 'INSERT INTO useractions VALUES (NULL, ?, ?, ?)';
  const values = [request.body.name, startDateUTC, endDateUTC];

  pool.query(query, values, function (err, result) {
    if (err) {
      console.error(err);
      response.status(500).send('Error while inserting data');
    } else {
      response.send(result);
    }
  });
});


app.listen(3005, () => {
  console.log(`App running on: http://localhost:${3005}`)
});


