const uuidv4 = require('uuid').v4;

const getInfoFromStatus = (statusCode) => {
  const data = [
    { statusCode: 400, title: 'Bad Request', url: 'https://tools.ietf.org/html/rfc7231#section-6.5.1' },
    { statusCode: 401, title: 'Unauthorized', url: 'https://tools.ietf.org/html/rfc7231#section-3.1' },
    { statusCode: 403, title: 'Forbidden', url: 'https://tools.ietf.org/html/rfc7231#section-6.5.3' },
    { statusCode: 404, title: 'Not Found', url: 'https://tools.ietf.org/html/rfc7231#section-6.5.4' },
    { statusCode: 500, title: 'Internal Server Error', url: 'https://tools.ietf.org/html/rfc7231#section-6.6.1' },
    { statusCode: 503, title: 'Service Unavailable', url: 'https://tools.ietf.org/html/rfc7231#section-6.6.4' },
  ];
  return data.filter((x) => x.statusCode === statusCode)[0];
};

const getErrorStructure = (err) => {
  const info = getInfoFromStatus(err.status) ? getInfoFromStatus(err.status) : getInfoFromStatus(500);

  return {
    id: uuidv4(),
    href: info.url,
    status: info.statusCode,
    code: err.code || 'NO_DEFINED',
    title: info.title,
    detail: err.message || 'NO_DEFINED',
  };
};

const errorMiddleware = (err, req, res, next) => {
  const errorResponse = getErrorStructure(err);
  const bodyResponse = { errors: [errorResponse] };

  res.status(errorResponse.status).json(bodyResponse);
  next();
};

exports.errorMiddleware = errorMiddleware;
exports.getErrorStructure = getErrorStructure;
exports.getInfoFromStatus = getInfoFromStatus;