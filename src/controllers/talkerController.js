const { readTalkerFile } = require('../utilities/fsUtilities');

const allTalkers = async (_req, res) => {
  const data = await readTalkerFile();
  res.status(200).json(data);
};

const talkerById = async (req, res) => {
  const { id } = req.params;
  const data = await readTalkerFile();
  const talker = data.find((t) => t.id === Number(id));

  if (!talker) {
    res.status(404).json({
      message: 'Pessoa palestrante não encontrada',
    });
  }
  res.status(200).json(talker);
};

module.exports = {
  allTalkers,
  talkerById,
};
