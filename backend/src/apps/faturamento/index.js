const faturamento = require('./calcularFaturamento');
const HTTP_STATUS_CODE = require('../../consts/HttpStatusCode');

const obterTodosOsDados = (_req, res) => {
  const dados = faturamento.obterTodosOsDados();

  return res.status(HTTP_STATUS_CODE.ok).json({ dados });
};

const obterDadosFiltrados = (_req, res) => {
  const dados = faturamento.calcularFaturamento();

  return res.status(HTTP_STATUS_CODE.ok).json(dados);
};

module.exports = {
  obterTodosOsDados,
  obterDadosFiltrados,
};
