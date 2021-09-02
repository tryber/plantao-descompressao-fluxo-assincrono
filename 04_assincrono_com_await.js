const fs = require('fs').promises;

const fileNames = [
	'./files/scryfall-default-cards.json',
	'./files/Legacy.json',
	'./files/Vintage.json',
	'./files/AllPrintings.json',
	'./files/AllCards.json'
]


fileNames.forEach(async (fileName) => {
	const file = await fs.readFile(fileName)
	
	console.log(`${fileName}: ${file.length}`);
});

