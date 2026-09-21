//q16
const fs = require('node:fs');
const path = require("node:path");

const exist = fs.existsSync(path.join(__dirname , 'notes.txt'));

console.log(exist);