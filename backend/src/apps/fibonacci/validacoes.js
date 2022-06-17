const Joi = require('joi');

const validarNumero = (req, _res, next) => {
  const { numero } = req.query;

  const { error } = Joi.object({
    numero: Joi.number().min(0).required(),
  })
    .validate({ numero: Number(numero) });

  if (error) return next(error);

  return next();
};

module.exports = { validarNumero };
