const fs = require('fs');
const { printWithSpace } = require('./util/func');

const fileNames = [
  './files/scryfall.json',
  './files/Legacy.json',
  './files/Vintage.json',
  './files/AllPrintings.json',
  './files/AllCards.json',
];

fileNames.forEach((fileName) => {
	console.log(`Pedindo para ler o arquivo ${fileName}`);
  const file = fs.readFileSync(fileName);
  printWithSpace(file, fileName);
});