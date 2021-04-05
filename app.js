'use strict';

const express = require('express');
const bodyParser = require ('body-parser')
const localApp = require ("./helloworld")

// Constants
const PORT = 3000;
const HOST = 'localhost';

//var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended: false})

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Taskme DB RestAPI</h1>');
});

app.post('/dbsave', urlencodedParser, (req, res) => {
  //console.log(req);
  res.send(localApp.updateRequest ("Updated ","Backend Layer"));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);