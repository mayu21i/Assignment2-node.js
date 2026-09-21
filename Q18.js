//q18
const fs = require('node:fs');
const path = require("node:path");

const stream = fs.createReadStream(path.join(__dirname,'big.txt') , 'utf-8');
stream.on('data' , (chunk) => {
    console.log(chunk);
})