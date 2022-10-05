const validatePassword = async (req, _res, next) => {
  const { password } = req.body;

  if (!password) {
    next({ status: 400, message: 'O campo "password" é obrigatório' });
  }

  if (password.length < 6) {
    next({ status: 400, message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = {
  validatePassword,
};
