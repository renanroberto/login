'use strict';

const express = require('express');
const router = express.Router();
const restrict = require('../methods').restrict;

router.get('/', restrict, (req, res) => {
  res.status(200).render('index');
});

module.exports = router;
