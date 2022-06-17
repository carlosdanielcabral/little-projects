const HTTP_STATUS_CODE = require('../consts/HttpStatusCode');

const errorMiddleware = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res
      .status(HTTP_STATUS_CODE.badRequest)
      .json({ message: err.details[0].message });
  };

  if (!err.code) {
    return res
      .status(HTTP_STATUS_CODE.internalServerError)
      .json({ message: 'Internal Server Error' });
  }

  return res
    .status(HTTP_STATUS_CODE[err.code])
    .json({ message: err.message });
};

module.exports = errorMiddleware;
