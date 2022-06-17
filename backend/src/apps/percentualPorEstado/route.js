const { Router } = require('express');
const percentualPorEstado = require('./index');

const router = Router();

router.get('/', percentualPorEstado);

module.exports = router;