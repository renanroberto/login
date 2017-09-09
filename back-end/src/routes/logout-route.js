'use strict';

const express = require('express');
const router = express.Router();
const restrict = require('../methods').restrict;

router.get('/', restrict, (req, res) => {
  req.session.destroy(() => {
    console.log(req.connection.remoteAddress + " has disconnected");
  });
});

module.exports = router;
