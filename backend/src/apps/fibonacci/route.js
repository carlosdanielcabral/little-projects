const { Router } = require('express');
const fibonacci = require('./index');

const router = Router();

router.get('/', fibonacci);

module.exports = router;
