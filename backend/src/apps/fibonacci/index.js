const validarFibonacci = require('./validarFibonacci');
const HTTP_STATUS_CODE = require('../../consts/HttpStatusCode');

const fibonacci = (req, res) => {
  const { numero } = req.query;

  const pertenceASequencia = validarFibonacci(Number(numero));

  return res.status(HTTP_STATUS_CODE.ok).json({ pertenceASequencia });
};

module.exports = fibonacci;
