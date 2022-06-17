const { Router } = require('express');
const fibonacci = require('./fibonacci/route');
const faturamento = require('./faturamento');
const percentual = require('./percentualPorEstado');

const router = Router();

router.use('/fibonacci', fibonacci);
router.use('/faturamento', faturamento);
router.use('/percentual', percentual);

module.exports = router;