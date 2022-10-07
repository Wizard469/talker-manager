const { readTalkerFile, writeTalkerFile } = require('../utilities/fsUtilities');

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

const addTalker = async (req, res) => {
  const data = await readTalkerFile();
  const { body } = req;

  const newTalker = {
    id: data.length + 1,
    ...body,
  };

  await writeTalkerFile([
    ...data,
    newTalker,
  ]);

  res.status(201).json(newTalker);
};

const updateTalker = async (req, res) => {
  const { body, params: { id } } = req;
  const data = await readTalkerFile();

  const indexToEdit = data.findIndex((t) => t.id === Number(id));

  data[indexToEdit] = { ...data[indexToEdit], ...body };

  await writeTalkerFile(data);

  res.status(200).json(data[indexToEdit]);
};

const deleteTalker = async (req, res) => {
  const { params: { id } } = req;
  const data = await readTalkerFile();

  const updateFile = data.filter((t) => t.id !== Number(id));

  await writeTalkerFile(updateFile);

  res.status(204).json(updateFile);
};

const talkersByQuery = async (req, res) => {
  const { query: { q } } = req;
  const data = await readTalkerFile();

  if (!q) {
    allTalkers();
  }

  const searchedResults = data.filter(({ name }) => name.includes(q));

  res.status(200).json(searchedResults);
};

module.exports = {
  allTalkers,
  talkerById,
  addTalker,
  updateTalker,
  deleteTalker,
  talkersByQuery,
};
