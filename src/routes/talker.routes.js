const express = require('express');

const routes = express.Router();

const { login } = require('../controllers/loginController');
const { allTalkers, talkerById } = require('../controllers/talkerController');
const resolver = require('../utilities/expressRouteAdapter');

routes.get('/talker', resolver(allTalkers));
routes.get('/talker/:id', resolver(talkerById));
routes.post('/login', resolver(login));

module.exports = routes;
