const fs = require('fs');
const path = require('path');

fs.readdir(
  path.join(__dirname, 'secret-folder'),
  { withFileTypes: true },
  (error, files) => {
    if (error) {
      console.log(error);
    }
    files
      .filter((file) => !file.isDirectory())
      .forEach((file) => {
        fs.stat(
          path.resolve('03-files-in-folder', 'secret-folder', file.name),
          (error, fileStat) => {
            if (error) {
              console.log(error);
            }
            const fileName = file.name.split('.').shift();
            const fileSize = fileStat.size;
            const extension = path.extname(file.name).replace('.', '');
            console.log(`${fileName} - ${extension} - ${fileSize} bytes`);
          }
        );
      });
  }
);
