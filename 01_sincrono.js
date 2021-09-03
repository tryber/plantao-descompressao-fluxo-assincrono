const fs = require('fs');
const { printWithSpace } = require('./util/func');

const timerTotal = { start: new Date() };

const fileNames = [
  './files/scryfall.json',
  './files/Legacy.json',
  './files/Vintage.json',
  './files/AllPrintings.json',
  './files/AllCards.json',
];

fileNames.forEach((fileName) => {
  const timers = { start: new Date() };
  const file = fs.readFileSync(fileName);
  timers.end = new Date();
  printWithSpace(file, fileName, timers);
});

timerTotal.end = new Date();
console.log(`\nTempo total:\t\t ${timerTotal.end - timerTotal.start}ms`);
