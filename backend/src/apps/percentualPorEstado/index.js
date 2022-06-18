const HTTP_STATUS_CODE = require('../../consts/HttpStatusCode');
const calcularPercentual = require('./calcularPercentual');

const percentualPorEstado = (_req, res) => {
  const dados = calcularPercentual();

  return res.status(HTTP_STATUS_CODE.ok).json(dados);
};

module.exports = percentualPorEstado;
