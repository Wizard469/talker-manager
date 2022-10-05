const express = require('express');

const routes = express.Router();

const { allTalkers, talkerById } = require('../controllers/talkerController');
const resolver = require('../utilities/expressRouteAdapter');

routes.get('/talker', resolver(allTalkers));
routes.get('/talker/:id', resolver(talkerById));

module.exports = routes;
