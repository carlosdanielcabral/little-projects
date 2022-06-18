const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const ErrorMiddleware = require('./middlewares/error');
const router = require('./apps/router');

const app = express();

app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', router);
app.use(ErrorMiddleware);

const PORT = 3001;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
