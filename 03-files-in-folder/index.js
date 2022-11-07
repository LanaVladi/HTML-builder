// solution using callback

// const fs = require('fs');
// const path = require('path');

// const pathToFolder = path.join(__dirname, 'secret-folder');

// fs.readdir(path.join(pathToFolder), { withFileTypes: true }, (error, files) => {
//   if (error) {
//     console.error(error);
//   }
//   files
//     .filter((file) => !file.isDirectory())
//     .forEach((file) => {
//       fs.stat(path.resolve(pathToFolder, file.name), (error, fileStat) => {
//         if (error) {
//           console.error(error);
//         }
//         const fileName = file.name.split('.').shift();
//         const fileSize = fileStat.size;
//         const extension = path.extname(file.name).replace('.', '');
//         console.log(`${fileName} - ${extension} - ${fileSize} bytes`);
//       });
//     });
// });

// solution using promises

const { readdir, stat } = require('fs/promises');
const path = require('path');

async function readDir() {
  const pathToFolder = path.join(__dirname, 'secret-folder');

  try {
    const files = await readdir(path.join(pathToFolder), {
      withFileTypes: true,
    });
    files
      .filter((file) => !file.isDirectory())
      .forEach(async (file) => {
        const fileStat = await stat(path.resolve(pathToFolder, file.name));
        const fileName = file.name.split('.').shift();
        const fileSize = fileStat.size;
        const extension = path.extname(file.name).replace('.', '');
        const output = `${fileName} - ${extension} - ${fileSize} bytes`;
        console.log(output);
      });
  } catch (error) {
    if (error) {
      console.error(error);
    }
  }
}

readDir();
