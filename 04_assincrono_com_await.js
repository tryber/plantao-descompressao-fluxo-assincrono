const fs = require('fs').promises;
const { printWithSpace } = require('./util/func');

const fileNames = [
  './files/scryfall.json',
  './files/Legacy.json',
  './files/Vintage.json',
  './files/AllPrintings.json',
  './files/AllCards.json',
];

fileNames.forEach(async (fileName) => {
	console.log(`Pedindo para ler o arquivo ${fileName}`);
  const file = await fs.readFile(fileName);

	console.log(`finalizou a promise de ${fileName}`);
	printWithSpace(file, fileName);
});

console.log('Fora do foreach');
