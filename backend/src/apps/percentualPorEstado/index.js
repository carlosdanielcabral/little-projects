const HTTP_STATUS_CODE = require('../../consts/HttpStatusCode');
const calcularPercentual = require('./calcularPercentual');

const percentualPorEstado = (req, res, next) => {
  const dados = calcularPercentual();

  return res.status(HTTP_STATUS_CODE.ok).json(dados);
};

module.exports = percentualPorEstado;
