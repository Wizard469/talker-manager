const validateTalk = async (req, _res, next) => {
  const { talk } = req.body;

  if (!talk) {
    next({ status: 400, message: 'O campo "talk" é obrigatório' });
  }

  next();
};

module.exports = validateTalk;
