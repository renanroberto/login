'use strict';

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Datavase connect
mongoose.connect('mongodb://renan:renan@ds125994.mlab.com:25994/login', { useMongoClient: true });

// Load models
const User = require('./models/user');

// Load routes
const loginRoute = require('./routes/login-route');
const logoutRoute = require('./routes/logout-route');

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Session
app.use(session({
  secret: "Mobe, guarda meu segredo",
  resave: false,
  saveUninitialized: false
}));

// Static
app.use(express.static('views'));

// Use routes
app.use('/checklogin', loginRoute);
app.use('/logout', logoutRoute);

module.exports = app;
