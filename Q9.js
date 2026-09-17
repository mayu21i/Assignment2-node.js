//q9
const path = require("node:path");

function joiningPaths(path1 , path2){

    return path.join(path1 , path2);
}

console.log(joiningPaths('/folder1' , 'folder2/file.txt'));