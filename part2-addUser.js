//part2-Q1
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const PORT = 3001 ;
const server = http.createServer(handler);
function handler(req , res){
    const {url , method} = req;
    if(url === '/user' && method === 'POST'){
        let body = '';
        req.on('data' , (chunk) =>{
            body += chunk ;
        })
        req.on('end', () => {
            let users = fs.readFileSync(path.join(__dirname,'db/users.json') , {encoding: 'utf-8'});
            users = JSON.parse(users);
            body = JSON.parse(body);
            if(users[body.email]){
                res.writeHead(409 ,{'Content-Type': 'application/json'});
                res.end(JSON.stringify(
                    {
                        message: 'Email already exists.'
                    }
                ));
                return;
            }
            let maxId = 0;
            for (const email in users){
                if (users[email].id > maxId) maxId = users[email].id;
            }
            body.id = maxId + 1;
            users[body.email] = body;
            users = JSON.stringify(users);
            fs.writeFileSync(path.join(__dirname,'db/users.json') , users)

            res.writeHead(201 ,{'Content-Type': 'application/json'});
            res.end(JSON.stringify(
                {
                    message: 'User added successfully.'
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
 