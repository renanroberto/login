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
const indexRoute = require('./routes/index-route');
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

// Resources
app.use(express.static('resources'));

// Use routes
app.use('/', indexRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);

// Page not found
app.use((req, res) => {
  res.status(404).render('404');
});

module.exports = app;
