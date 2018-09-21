'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/hello', (req, res) => {
  res.send('Hello world from the API\n');
});

app.get('/users', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify([{ name: "John" }, { name: "Jane" }]));
});

app.listen(PORT, HOST);
console.log(`API running on http://${HOST}:${PORT}`);
