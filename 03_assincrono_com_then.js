const fs = require('fs').promises;
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
  const promise = fs.readFile(fileName);
	promise.then(function (file) {
    printWithSpace(file, fileName);
  });
});

