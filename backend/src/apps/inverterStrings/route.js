const { Router } = require('express');
const inverterString = require('./index');
const { validarString } = require('./validacoes');

const router = Router();

router.get('/', validarString, inverterString);

module.exports = router;