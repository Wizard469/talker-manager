const express = require('express');
const { login } = require('../controllers/loginController');
const { validateEmail } = require('../middlewares/validateLogin/validateEmail');
const { validatePassword } = require('../middlewares/validateLogin/validatePassword');

const routes = express.Router();

const resolver = require('../utilities/expressRouteAdapter');

routes.post(
  '/login',
  resolver(validateEmail),
  resolver(validatePassword),
  resolver(login),
);

module.exports = routes;
