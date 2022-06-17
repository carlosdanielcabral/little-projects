const { Router } = require('express');
const fibonacci = require('./fibonacci/route');

const router = Router();

router.use('/fibonacci', fibonacci);

module.exports = router;