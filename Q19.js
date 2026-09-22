//q19
const fs = require('node:fs');
const path = require('node:path');

const readStream = fs.createReadStream(path.join(__dirname, 'source.txt') , 'utf-8');
const writeStream = fs.createWriteStream(path.join(__dirname, 'dest.txt'));

readStream.on('data' , (chunk) => {
    writeStream.write(chunk);
})
readStream.on('end' , () => {
    writeStream.end();
    console.log('File copied using streams');
})


/*
can be done using pipe() too

const fs = require('node:fs');
const path = require('node:path');

const readStream = fs.createReadStream(path.join(__dirname, 'source.txt'));

const writeStream = fs.createWriteStream(path.join(__dirname, 'dest.txt'));

readStream.pipe(writeStream);
*/