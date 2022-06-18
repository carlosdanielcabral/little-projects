const calcularFaturamento = require('./calcularFaturamento');
const HTTP_STATUS_CODE = require('../../consts/HttpStatusCode');

const faturamento = (_req, res) => {
  const dados = calcularFaturamento();

  return res.status(HTTP_STATUS_CODE.ok).json(dados);
};

module.exports = faturamento;
