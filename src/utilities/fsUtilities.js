const fs = require('fs').promises;
const { join } = require('path');

const readTalkerFile = async () => {
  const contentFile = await fs.readFile(join(__dirname, '../talker.json'), 'utf8');
  return JSON.parse(contentFile);
};

module.exports = {
  readTalkerFile,
};
