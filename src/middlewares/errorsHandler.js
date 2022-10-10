const errorsHandler = (err, _req, res, _next) => {
  const { status, message } = err;
  const customStatus = status || 500;
  const Message = customStatus === 500 ? 'Internal Server Error' : message;
  res.status(customStatus).json({ Message });
};

module.exports = errorsHandler;
