const express = require('express');
const talker = require('./talker.routes.js');

const routes = express.Router();
routes.use(talker);

module.exports = routes;
