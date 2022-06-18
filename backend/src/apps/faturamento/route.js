const { Router } = require('express');
const faturamento = require('./index');

const router = Router();

router.get('/dados', faturamento.obterTodosOsDados);
router.get('/', faturamento.obterDadosFiltrados);

module.exports = router;
