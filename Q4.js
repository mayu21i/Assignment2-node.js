//Q4
const path = require("node:path");

function extName(filePath){
    return path.extname(filePath);
}

console.log(extName('/docs/readme.md'))