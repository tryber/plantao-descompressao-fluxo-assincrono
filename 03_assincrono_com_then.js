const fs = require('fs').promises;

const fileNames = [
	'./files/scryfall-default-cards.json',
	'./files/Legacy.json',
	'./files/Vintage.json',
	'./files/AllPrintings.json',
	'./files/AllCards.json'
]


fileNames.forEach((fileName) => {
	fs.readFile(fileName)
		.then(function (file) {
			console.log(`${fileName}: ${file.length}`)
		});
});

