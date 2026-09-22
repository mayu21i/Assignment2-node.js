//part2-Q5
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const PORT = 3005 ;
const server = http.createServer(handler);
function handler(req , res){
    const {url , method} = req;
    if(url.startsWith('/user/') && method === 'GET'){
        let users = fs.readFileSync(path.join(__dirname,'db/users.json'));
        users = JSON.parse(users);
        const idToGet = Number(url.split('/')[2]);
        let targetedEmail = null ;
        for(const email in users){
            if(idToGet === users[email].id){
                targetedEmail = email ;
                break;
            }
        }
        if(!targetedEmail){
            res.writeHead(404 ,{'Content-Type': 'application/json'});
            res.end(JSON.stringify(
                {
                    message: 'User not found.'
                }
            ));
            return;
        }
        const wantedUser = users[targetedEmail];
        res.writeHead(200 , {'Content-Type': 'application/json'});
        res.write(JSON.stringify(wantedUser));
        res.end();
    }
}
server.listen(PORT ,
    () => {
        console.log(`server is running on port ${PORT}`);
    }
) ;
 