const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const errorsHandler = require('./middlewares/errorsHandler');

const app = express();
app.use(bodyParser.json());
app.use(routes);

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use(errorsHandler);

app.listen(PORT, () => {
  console.log('Online');
});
