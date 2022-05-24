const fs = require('fs');
const path = require('path');

dirSrcPath = path.join('04-copy-directory', 'files');
dirDestPath = path.join('04-copy-directory', 'files-copy');  

 fs.rm(dirDestPath, { recursive: true, force: true }, () => {
  fs.mkdir((dirDestPath), { recursive: true }, () => {
  fs.readdir((dirSrcPath), {withFileTypes: true}, (error, files) => {
   if (error) {
 console.log(error);
  }
  files.forEach(file => {
   if(file.isFile()) {
        fs.copyFile(path.join(dirSrcPath, file.name), path.join(dirDestPath, file.name),
         () => {
        });
     };
   });
});
   });
});
