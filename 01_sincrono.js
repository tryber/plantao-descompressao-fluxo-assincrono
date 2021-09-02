const fs = require('fs');

const fileNames = [
	'./files/scryfall-default-cards.json',
	'./files/Legacy.json',
	'./files/Vintage.json',
	'./files/AllPrintings.json',
	'./files/AllCards.json'
]


fileNames.forEach((fileName) => {
	const file = fs.readFileSync(fileName);
	console.log(`${fileName}: ${file.length}`)
});

