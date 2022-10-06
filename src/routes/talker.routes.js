const express = require('express');

const routes = express.Router();

const { allTalkers, talkerById, addTalker } = require('../controllers/talkerController');
const validateAge = require('../middlewares/validateTalker/validateAge');
const validateName = require('../middlewares/validateTalker/validateName');
const validateRate = require('../middlewares/validateTalker/validateRate');
const validateTalk = require('../middlewares/validateTalker/validateTalk');
const validateToken = require('../middlewares/validateTalker/validateToken');
const validateWatchedAt = require('../middlewares/validateTalker/validateWatchedAt');
const resolver = require('../utilities/expressRouteAdapter');

routes.get('/talker', resolver(allTalkers));
routes.get('/talker/:id', resolver(talkerById));

routes.post(
  '/talker',
  resolver(validateToken),
  resolver(validateName),
  resolver(validateAge),
  resolver(validateTalk),
  resolver(validateRate),
  resolver(validateWatchedAt),
  resolver(addTalker),
);

module.exports = routes;
