//q11
const fs = require('node:fs')
const path = require("node:path");

function makeFolder(fileName){
    fs.mkdirSync(path.join(__dirname , fileName) , {recursive : true});
    console.log('Success');
}

makeFolder('newFolder');