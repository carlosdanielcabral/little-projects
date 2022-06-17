const calcularFaturamento = require('./calcularFaturamento');
const HTTP_STATUS_CODE = require('../../consts/HttpStatusCode');

const faturamento = (req, res, next) => {
  const dados = calcularFaturamento();

  return res.status(HTTP_STATUS_CODE.ok).json(dados);
};

module.exports = faturamento;
