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

const allPromises = fileNames.map(async (fileName) => {
  return await fs.readFile(fileName);
});

Promise.all(allPromises).then((files) => {
	files.forEach(function (file, index) {
		printWithSpace(file, fileNames[index]);
	})
});
