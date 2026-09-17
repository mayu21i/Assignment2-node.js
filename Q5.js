//Q5
const path = require("node:path");

function pathParser(filePath){
    const parsed = path.parse(filePath);
    return {
        Name : parsed.name ,
        Ext : parsed.ext
    };
}

console.log(pathParser('/home/app/main.js'));