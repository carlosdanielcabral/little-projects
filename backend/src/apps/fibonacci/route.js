const { Router } = require('express');
const fibonacci = require('./index');
const { validarNumero } = require('./validacoes');

const router = Router();

router.get('/', validarNumero, fibonacci);

module.exports = router;