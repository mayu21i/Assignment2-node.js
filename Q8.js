//q8
const path = require("node:path");

function resolvingPath(filePath){
    return path.resolve(filePath);
}

console.log(resolvingPath('./index.js'))