const fs = require("fs");
const path = require("path");
const process = require("process");

const output = fs.createWriteStream(path.join("02-write-file", "destination.txt"));
// создает файл 'destination.txt' в папке '02-write-file'

const { stdin, stdout } = process;
stdout.write("Good day! Please enter your text:\n");
stdin.on("data", (data) => {
 process.on('SIGINT', () => {
  stdout.write("Good bye!\n")
    process.exit();
});
  if (data.toString().trim() === "exit") {
    stdout.write("Good bye!\n");
    process.exit();
  }

  fs.appendFile(
    path.join("02-write-file", "destination.txt"), data,function (error) {
      if (error) throw error; // ошибка чтения файла, если есть
    }
  );
});
