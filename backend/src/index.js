const express = require('express');
const router = require('./apps/router');

const app = express();

app.use('/', router);

app.listen(3001, () => console.log('Ouvindo na porta 3001'));
