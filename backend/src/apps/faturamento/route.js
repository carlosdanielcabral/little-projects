const { Router } = require('express');
const faturamento = require('./index');

const router = Router();

router.get('/', faturamento);

module.exports = router;
