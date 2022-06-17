const Joi = require('joi');

const validarString = (req, _res, next) => {
  const { string } = req.query;

  const { error } = Joi.object({
    string: Joi.string().not().empty().required(),
  })
    .validate({ string });

  if (error) return next(error);

  return next();
};

module.exports = { validarString };
