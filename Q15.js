//q15
const fs = require('node:fs');
const path = require("node:path");

fs.writeFile(path.join(__dirname , 'async.txt' ), 'Async save' , (err) => {
    if(err){
        console.log(err);
        return ;
    }
});
