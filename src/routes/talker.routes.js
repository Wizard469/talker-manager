const express = require('express');

const routes = express.Router();

const talkerController = require('../controllers/talkerController');
const resolver = require('../utilities/expressRouteAdapter');

routes.get('/talker', resolver(talkerController));

module.exports = routes;
