//q7
const path = require("node:path");

function joining(...segments){
    return path.join(...segments);
}

console.log(joining("src", "components", "App.js"));