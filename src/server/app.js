const express = require('express');
const app = express();

import twitter from './twitter';

app.use(express.static('build'));

app.get('/', function (req, res) {
  res.sendFile('index.html');
});
export default app;
