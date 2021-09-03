const config = require('../config.json');

function getName(fileName) {
  const pathName = fileName.split('/');
  return pathName[pathName.length - 1];
}

function getSizeMB(length) {
  const size = length / 1e6;
  return Math.round(size * 100) / 100;
}

function printWithSpace(file, fileName) {
  const nameSize = getName(fileName).length;
  console.log(`${getName(fileName)}: ${getSizeMB(file.length)}MB `);
}

module.exports = { getName, getSizeMB, printWithSpace };
