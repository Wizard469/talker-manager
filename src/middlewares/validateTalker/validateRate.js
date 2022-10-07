const validateRate = async (req, _res, next) => {
  const { rate } = req.body.talk;

  if (rate === undefined) {
    next({ status: 400, message: 'O campo "rate" é obrigatório' });
  }

  if (rate < 1 || rate > 5) {
    next({ status: 400, message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
  }

  next();
};

module.exports = validateRate;
