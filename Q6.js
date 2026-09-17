//q6
const path = require("node:path");

function absolutePath(filePath){
    return path.isAbsolute(filePath);
}

console.log(absolutePath('/home/user/file.txt'))