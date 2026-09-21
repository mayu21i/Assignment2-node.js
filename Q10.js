//Q10
const fs = require('node:fs');
const path = require("node:path");

function deleteFile(filePath){

    return fs.unlink(filePath ,
        (err) => {
            if(err){
                console.log(err);
                return ;
            }
            console.log(`the ${path.basename(filePath)} is deleted`);
        }
    )
}

console.log(deleteFile(path.join(__dirname , 'file.txt')));