const fs = require('fs');

const fileNames = [
	'./files/scryfall-default-cards.json',
	'./files/Legacy.json',
	'./files/Vintage.json',
	'./files/AllPrintings.json',
	'./files/AllCards.json'
]


fileNames.forEach((fileName) => {
	fs.readFile(fileName, (_, file) => {
		console.log(`${fileName}: ${file.length}`);
	});
});
