const fs = require('fs');
const path = require('path');

// ==============  START create INDEX.HTML file
fs.readFile(path.join(__dirname, 'articles.html'), (err, data) => {

const bundleHtml = fs.createWriteStream(path.join(__dirname, 'project-dist', 'index.html'));
fs.readFile(path.join(__dirname, 'template.html'), (err, data) => {

    if (err) {
        console.log(err);
    }
//    data =  data.toString().replace('{{header}}', '<header>');
//    console.log('data :', data);
})
})
// ==============  END create INDEX.HTML file

// create folder project-dist and bundle style.css
const projectDist = fs.mkdir(path.join(__dirname, 'project-dist'),  { recursive: true }, () => {
const bundleStyle = fs.createWriteStream(path.join(__dirname, 'project-dist', 'style.css'));
fs.readdir(path.join('06-build-page', 'styles'), { withFileTypes: true }, (error, files) => {
    if (error) {
        console.log(error);
    }
    files.forEach(file => {
        files.filter(file => file.isFile())
        if (path.extname(file.name) === '.css') {
            fs.readFile(path.join(__dirname, 'styles', file.name), 'utf-8', (error, data) => {
                if (error) {}
                bundleStyle.write(data + '\n');
         
            });
        };
    });
});

// copy folder assets
dirSrcPath = path.join(__dirname, 'assets');
dirDestPath = path.join(__dirname, 'project-dist', 'assets'); 

dirAssetsFontsSrcPath = path.join(__dirname, 'assets', 'fonts');
dirAssetsImgSrcPath = path.join(__dirname, 'assets', 'img');
dirAssetsSvgSrcPath = path.join(__dirname, 'assets', 'svg');

dirAssetsFontsDestPath = path.join(__dirname, 'project-dist', 'assets', 'fonts');
dirAssetsImgDestPath = path.join(__dirname, 'project-dist', 'assets', 'img');
dirAssetsSvgDestPath = path.join(__dirname, 'project-dist', 'assets', 'svg');


// copy folder name assets
fs.rm(dirDestPath, { recursive: true, force: true }, () => {
    fs.mkdir((dirDestPath), { recursive: true }, () => {
    fs.readdir((dirSrcPath), {withFileTypes: true}, (error, files) => {
     if (error) {
   console.log(error);
    }
    files.forEach(file => {
    // console.log('file :', file);

    // ============== START copy  assets's folders

    // ============== 1 START  copy  assets's folders +++ FOLDER FONTS
    if(file.isDirectory()) {
        // fs.rm(dirDestPath, { recursive: true, force: true }, () => {
            fs.mkdir((dirAssetsFontsDestPath), { recursive: true }, () => {
            fs.readdir((dirAssetsFontsSrcPath), {withFileTypes: true}, (error, filesFonts) => {
            // console.log('filesFonts :', filesFonts);
             if (error) {
           console.log(error);
            }
            filesFonts.forEach(fileFonts => {
         if(fileFonts.isFile()) {
          fs.copyFile(path.join(dirAssetsFontsSrcPath, fileFonts.name),
           path.join(dirAssetsFontsDestPath, fileFonts.name),
           () => {
          });
       };
     });
  });
     });
// ============== 1 END copy  assets's folders +++ FOLDER FONTS

// ============== 2 START  copy  assets's folders +++ FOLDER IMG
     fs.mkdir((dirAssetsImgDestPath), { recursive: true }, () => {
    fs.readdir((dirAssetsImgSrcPath), {withFileTypes: true}, (error, filesImg) => {
    // console.log('filesImg :', filesImg);
     if (error) {
   console.log(error);
    }
    filesImg.forEach(fileImg => {
 if(fileImg.isFile()) {
  fs.copyFile(path.join(dirAssetsImgSrcPath, fileImg.name),
   path.join(dirAssetsImgDestPath, fileImg.name),
   () => {
  });
};
});
});
});

// ============== 2 END copy  assets's folders +++ FOLDER IMG

// ============== 3 START  copy  assets's folders +++ FOLDER IMG
fs.mkdir((dirAssetsSvgDestPath), { recursive: true }, () => {
fs.readdir((dirAssetsSvgSrcPath), {withFileTypes: true}, (error, filesSvg) => {
// console.log('filesSvg :', filesSvg);
 if (error) {
console.log(error);
}
filesSvg.forEach(fileSvg => {
if(fileSvg.isFile()) {
fs.copyFile(path.join(dirAssetsSvgSrcPath, fileSvg.name),
path.join(dirAssetsSvgDestPath, fileSvg.name),
() => {
});
};
});
});
});

// ============== 3 END copy  assets's folders +++ FOLDER IMG

//   });
}; // // ============== bracket of test if(file.isDirectory()) { before it need to copy all folders of assets folder

// ============== end copy  assets's folders all

});
    });
});
});
// ============== end copy folder name assets
});