const fs = require('fs');
const path = require('path');

const bundle = fs.createWriteStream(path.join(__dirname, 'project-dist', 'bundle.css'));
fs.readdir(path.join(__dirname, 'styles'), { withFileTypes: true }, (error, files) => {
    if (error) {
        console.log(error);
    }
    files.forEach(file => {
        files.filter(file => file.isFile())
        if (path.extname(file.name) === '.css') {
            fs.readFile(path.join(__dirname, 'styles', file.name), 'utf-8', (error, data) => {
                if (error) {}
                bundle.write(data + '\n');
            });
        };
    });
});