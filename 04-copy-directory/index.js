// // solution using callback

// const fs = require('fs');
// const path = require('path');

// const dirSrcPath = path.join('04-copy-directory', 'files');
// const dirDestPath = path.join('04-copy-directory', 'files-copy');

// fs.rm(dirDestPath, { recursive: true, force: true }, () => {
//   fs.mkdir(dirDestPath, { recursive: true }, () => {
//     fs.readdir(dirSrcPath, { withFileTypes: true }, (error, files) => {
//       if (error) {
//         console.log(error);
//       }
//       files.forEach((file) => {
//         if (file.isFile()) {
//           fs.copyFile(
//             path.join(dirSrcPath, file.name),
//             path.join(dirDestPath, file.name),
//             () => {}
//           );
//         }
//       });
//     });
//   });
// });

// solution using promises

const { rm, mkdir, readdir, copyFile } = require('fs/promises');
const path = require('path');

async function copyDir() {
  const dirSrcPath = path.join('04-copy-directory', 'files');
  const dirDestPath = path.join('04-copy-directory', 'files-copy');

  try {
    await rm(dirDestPath, { recursive: true, force: true });
    await mkdir(dirDestPath, { recursive: true });
    const files = await readdir(dirSrcPath, { withFileTypes: true });
    files.forEach(async (file) => {
      if (file.isFile()) {
        await copyFile(
          path.join(dirSrcPath, file.name),
          path.join(dirDestPath, file.name)
        );
      }
    });
  } catch (error) {
    console.error(error);
  }
}

copyDir();
