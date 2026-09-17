//Q3
const path = require("node:path");

let objPath =
{
    dir: "/folder",
    name: "app", 
    ext: ".js"
} 

function createPath(obj){
    return path.format(obj);
}

console.log(createPath(objPath));