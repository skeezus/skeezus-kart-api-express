const express = require('express')
const UserControllers = require('./users/controllers');
const CSVControllers = require('./data/csv/controllers');

const app = express()

app.use('/users',  UserControllers);
app.use('/data/csv',  CSVControllers);

module.exports = app;