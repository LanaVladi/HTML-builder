const fs = require('fs');
const path = require('path');
const process = require('process');

const pathToFile = path.join(__dirname, 'destination.txt');

fs.createWriteStream(pathToFile);

const { stdin, stdout } = process;
stdout.write('Good day! Please enter your text:\n');
stdin.on('data', (data) => {
  process.on('SIGINT', () => {
    stdout.write('Good bye!\n');
    process.exit();
  });
  if (data.toString().trim() === 'exit') {
    stdout.write('Good bye!\n');
    process.exit();
  }

  fs.appendFile(pathToFile, data, function (error) {
    if (error) throw error;
  });
});
