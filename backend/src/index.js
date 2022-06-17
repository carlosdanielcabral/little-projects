const express = require('express');
const router = require('./apps/router');
const ErrorMiddleware = require('./middlewares/error');

const app = express();

app.use('/', router);
app.use(ErrorMiddleware);

app.listen(3001, () => console.log('Ouvindo na porta 3001'));
