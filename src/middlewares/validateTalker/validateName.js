const validateName = async (req, _res, next) => {
  const { name } = req.body;

  if (!name) {
    next({ status: 400, message: 'O campo "name" é obrigatório' });
  }

  if (name.length < 3) {
    next({ status: 400, message: 'O "name" deve ter pelo menos 3 caracteres' });
  }

  next();
};

module.exports = validateName;
