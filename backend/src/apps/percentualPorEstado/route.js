const { Router } = require('express');
const percentual = require('./index');

const router = Router();

router.get('/', percentual);

module.exports = router;