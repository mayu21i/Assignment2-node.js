//q20
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');

const {pipeline} = require('node:stream');

pipeline(
    fs.createReadStream(path.join(__dirname , 'data.txt') , 'utf-8'),
    zlib.createGzip(),
    fs.createWriteStream(path.join(__dirname , 'data.txt.gz')),
    (err) => {
        if(err){
            console.log(err);
            return;
        }
    }
)