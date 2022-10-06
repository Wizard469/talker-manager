const fs = require('fs').promises;
const { join } = require('path');

const readTalkerFile = async () => {
  const fileContent = await fs.readFile(join(__dirname, '../talker.json'), 'utf8');
  return JSON.parse(fileContent);
};

const writeTalkerFile = async (data) => {
  const newContent = await fs.writeFile(join(__dirname, '../talker.json'),
  JSON.stringify(data));

  return newContent;
};

module.exports = {
  readTalkerFile,
  writeTalkerFile,
};
