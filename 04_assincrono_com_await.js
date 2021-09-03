const fs = require('fs').promises;
const { printWithSpace } = require('./util/func');

const timerTotal = { start: new Date() };

const fileNames = [
  './files/scryfall.json',
  './files/Legacy.json',
  './files/Vintage.json',
  './files/AllPrintings.json',
  './files/AllCards.json',
];

fileNames.forEach(async (fileName) => {
  const file = await fs.readFile(fileName);
  printWithSpace(file, fileName);
});

