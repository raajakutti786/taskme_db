'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('<h1>Taskme DB RestAPI</h1>');
});

app.post('/dbsave', (req, res) => {
  res.send('Saved in DB');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);