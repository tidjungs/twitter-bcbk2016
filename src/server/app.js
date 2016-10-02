const express = require('express');
const app = express();

const  twitter  = require('./twitter');

twitter();

export default app;
