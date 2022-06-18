const express = require('express');
const cors = require('cors');
const router = require('./apps/router');
const ErrorMiddleware = require('./middlewares/error');

const app = express();

app.use(cors());
app.use('/', router);
app.use(ErrorMiddleware);

const PORT = 3001;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
