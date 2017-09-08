'use strict';

const express = require('express');
const router = express.Router();
const restrict = require('../methods').restrict;

router.get('/', restrict, (req, res) => {
  req.session.destroy(() => {
    console.log(req.connection.remoteAddress + " has disconnected");
    res.status(401).redirect('/');
  });
});

module.exports = router;
