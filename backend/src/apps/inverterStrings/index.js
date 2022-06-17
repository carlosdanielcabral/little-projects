const inverterString = require('./inverterStrings');
const HTTP_STATUS_CODE = require('../../consts/HttpStatusCode');

const inverter = (req, res, next) => {
  const { string } = req.query;

  const stringInvertida = inverterString(string);

  return res.status(HTTP_STATUS_CODE.ok).json({ stringInvertida });
};

module.exports = inverter;
