const { Router } = require('express');
const fibonacci = require('./fibonacci/route');
const faturamento = require('./faturamento/route');
const percentual = require('./percentualPorEstado/route');
const inverterString = require('./inverterStrings/route');

const router = Router();

router.use('/fibonacci', fibonacci);
router.use('/faturamento', faturamento);
router.use('/percentual', percentual);
router.use('/inverter-string', inverterString);

module.exports = router;
