//q1
const path = require("node:path");
function fileDir(){
    console.log(
        {
            File : __filename,
            Dir : __dirname

        }
    );
}

fileDir();