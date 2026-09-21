//q14
const fs = require('node:fs');
const path = require("node:path");

const data = fs.readFileSync(path.join(__dirname , 'note.txt' ),'utf-8');

console.log(data);