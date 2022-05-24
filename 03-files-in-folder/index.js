const fs = require("fs");
const path = require("path");

const pathFolder = path.join(__dirname, "secret-folder");
const pathFile = path.join(pathFolder, __filename);

async function myReadDir (pathFolder) {
  const filesName = await fs.promises.readdir(pathFolder);
    for (let fileName of filesName) {
    fs.stat(path.resolve('03-files-in-folder', "secret-folder", __filename), 
    (err, fileSize) => {
      fileSize = fileSize.size;
      const extension = path.extname(fileName).replace('.', '');
      fileName = fileName.split('.').shift();
      console.log( `${fileName} - ${extension} - ${fileSize} bytes`);
    })};
   
}
myReadDir(pathFolder);