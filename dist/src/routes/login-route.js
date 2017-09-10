'use strict';

const express = require('express');
const router = express.Router();
const restrict = require('../methods').restrict;
const controller = require('../controllers/login-controller');

router.get('/', restrict, controller.get);
router.post('/', controller.post);

module.exports = router;
