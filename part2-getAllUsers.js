//part2-Q4
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const PORT = 3004 ;
const server = http.createServer(handler);
function handler(req , res){
    const {url , method} = req;
    if(url === '/user' && method === 'GET'){
        let data = fs.readFileSync(path.join(__dirname,'db/users.json'));
        data = JSON.parse(data);
        const allUsers = Object.values(data);
        res.writeHead(200 , {'Content-Type': 'application/json'});
        res.write(JSON.stringify(allUsers));
        res.end();
    }
}
server.listen(PORT ,
    () => {
        console.log(`server is running on port ${PORT}`);
    }
) ;
 