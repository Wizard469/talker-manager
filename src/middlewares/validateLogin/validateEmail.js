const validateEmail = async (req, _res, next) => {
  const { email } = req.body;
  const filter = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!email) {
    next({ status: 400, message: 'O campo "email" é obrigatório' });
  }

  if (!filter.test(email)) {
    next({ status: 400, message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = {
  validateEmail,
};
