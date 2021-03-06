const config = require('../config.json');

function getName(fileName) {
  const pathName = fileName.split('/');
  return pathName[pathName.length - 1];
}

function getSizeMB(length) {
  const size = length / 1e6;
  return Math.round(size * 100) / 100;
}

function printWithSpace(file, fileName, timers, index) {
  const nameSize = getName(fileName).length;
  const space = nameSize < 13 ? '\t\t' : '\t';
  const timerPrint = `${space}=> time: ${timers.end - timers.start}ms`;
  console.log(
    `${getName(fileName)}: ${getSizeMB(file.length)}MB  ${
      config.timePrint ? timerPrint : ''
    }`,
  );
}

module.exports = { getName, getSizeMB, printWithSpace };
