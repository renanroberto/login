'use strict';

const express = require('express');
const session = require('express-session');
const history = require('connect-history-api-fallback');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Database connect
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://renan:renan@ds125994.mlab.com:25994/login', {
  useMongoClient: true
}).then(() => {
  console.log('Database connected')
}, err => {
  console.log('Can\'t connect on database', err)
})

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
const views = express.static('views');
app.use(views);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(views);

// Use routes
app.use('/api/login', loginRoute);
app.use('/api/logout', logoutRoute);

module.exports = app;
