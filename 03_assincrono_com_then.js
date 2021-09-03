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

fileNames.forEach((fileName) => {
  fs.readFile(fileName).then(function (file) {
    printWithSpace(file, fileName);
  });
});

