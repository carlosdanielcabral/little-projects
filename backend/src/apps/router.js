const { Router } = require('express');
const fibonacci = require('./fibonacci/route');
const faturamento = require('./faturamento');

const router = Router();

router.use('/fibonacci', fibonacci);
router.use('/faturamento', faturamento);

module.exports = router;