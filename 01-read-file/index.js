// The first variant of solution

// const fs = require('fs');
// const path = require('path');

// fs.readFile(
//     path.join(__dirname, 'text.txt'),
//     'utf-8',
//     (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     }
// );

// The second variant of solution

const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'text.txt');

const stream = fs.createReadStream(pathToFile, 'utf-8');

let data = '';

stream.on('data', (chunk) => (data += chunk));
stream.on('end', () => console.log(data));
stream.on('error', (error) => console.log('Error', error.message));
