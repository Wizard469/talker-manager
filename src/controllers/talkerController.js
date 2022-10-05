const { readTalkerFile } = require('../utilities/fsUtilities');

const talkerController = async (_req, res) => {
  const data = await readTalkerFile();
  res.status(200).json(data);
};

module.exports = talkerController;
