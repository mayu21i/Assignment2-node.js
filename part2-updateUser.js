//part2-Q2
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const PORT = 3002 ;
const server = http.createServer(handler);
function handler(req , res){
    const {url , method} = req;
    if(url.startsWith('/user/') && method === 'PATCH'){
        let body = '';
        req.on('data' , (chunk) => {
            body += chunk;
        })
        req.on('end' , () => {
            body = JSON.parse(body);
            let idToUpdate = Number(url.split('/')[2]);
            let users = fs.readFileSync(path.join(__dirname,'db/users.json'));
            users = JSON.parse(users);
            let targetedUser = null ;
            for(const email in users){
                if(users[email].id === idToUpdate){
                    targetedUser = email ;
                    break;
                }
            } 
            if(!targetedUser){
                res.writeHead(404 ,{'Content-Type': 'application/json'});
                res.end(JSON.stringify(
                    {
                        message: 'User ID not found.'

                    }
                ));
                return;
            }
            let updatedField = Object.keys(body)[0];
            if (body.email !== undefined){
                users[body.email] = { ...users[targetedUser], email: body.email };
                delete users[targetedUser];
            }
            else{
                Object.assign(users[targetedUser], body);
            }
            users = JSON.stringify(users);
            fs.writeFileSync(path.join(__dirname,'db/users.json') , users);
            res.writeHead(200 , {'Content-Type': 'application/json'});
            res.end(JSON.stringify(
                {
                    message: `User ${updatedField} updated successfully.` 
                } 
            ));
        })
    }
}
server.listen(PORT ,
    () => {
        console.log(`server is running on port ${PORT}`);
    }
) ;
 