'use strict';

const express = require('express');
const bodyParser = require ('body-parser')
const localApp = require ("./helloworld")
const redisApp = require ("./getconnection")
const redisDB = new redisApp();
var os = require('os');

// Constants
const PORT = 3000;
const HOST = os.hostname();

//var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({extended: false})

redisDB.MakeRedisConnection();

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Taskme DB RestAPI</h1>');
});

app.post('/dbsave', urlencodedParser, (req, res) => {
  
// preserve newlines, etc - use valid JSON
var tmp = JSON.stringify(req.body)
var obj = JSON.parse(tmp.replace("\\", "").replace("\\", "").replace("\\", "").replace("\\", "")
            .replace("\\", "").replace("\\", "").replace("\\", "").replace("\\", "").replace('}":""}', '}').replace('{"{', '{'))
 
  redisDB.SetRedisValue(obj.taskname, obj.taskvalue);
  res.send(localApp.updateRequest ("DBSave:","Backend Layer"));
});

app.get('/load', urlencodedParser, (req, res) => {
  //console.log(req);
  var temp = redisDB.GetRedisValue();
  res.send(localApp.updateRequest ("Load:",temp));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);