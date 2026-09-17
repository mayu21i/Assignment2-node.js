//q2
const path = require("node:path");

function getFileName(filePath){
    return path.basename(filePath);
}

console.log(getFileName('/user/files/report.pdf'));
