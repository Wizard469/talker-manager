const validateWatchedAt = async (req, _res, next) => {
  const { watchedAt } = req.body.talk;
  const dateReg = new RegExp('^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\\d\\d$');

  if (!watchedAt) {
    next({ status: 400, message: 'O campo "watchedAt" é obrigatório' });
  }

  if (!dateReg.test(watchedAt)) {
    next({ status: 400, message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }

  next();
};

module.exports = validateWatchedAt;
