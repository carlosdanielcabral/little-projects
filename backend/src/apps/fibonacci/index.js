const validarFibonacci = require('./validarFibonacci');

const fibonacci = (req, res, next) => {
  const { numero } = req.query;

  const pertenceASequencia = validarFibonacci(Number(numero));

  return res.status(200).json({ pertenceASequencia });
};

module.exports = fibonacci;
