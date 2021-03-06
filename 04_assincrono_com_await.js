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
  const timers = { start: new Date() };
  const file = await fs.readFile(fileName);
  timers.end = new Date();
  printWithSpace(file, fileName, timers);
});

timerTotal.end = new Date();
console.log(`\nTempo total:\t\t\t ${timerTotal.end - timerTotal.start}ms`);
