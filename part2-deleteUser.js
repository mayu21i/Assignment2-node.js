//part2-Q3
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');

const PORT = 3003 ;
const server = http.createServer(handler);
function handler(req , res){
    const {url , method} = req;
    if(url.startsWith('/user/') && method === 'DELETE'){
        const idToDelete = Number(url.split('/')[2]);
        let users = fs.readFileSync(path.join(__dirname,'db/users.json'));
        users = JSON.parse(users);

         let targetedUser = null ;
         for(const email in users){
            if(users[email].id === idToDelete){
                targetedUser = email ;
                break;
                   
                }
            } 

        if(!targetedUser){
            res.writeHead(404 ,{'Content-Type': 'application/json'});
            res.end(
                JSON.stringify(
                    {
                        message: "User ID not found.",
                    }
                )
            )
            return ;
        }
        delete users[targetedUser];
        users = JSON.stringify(users);
        fs.writeFileSync(path.join(__dirname,'db/users.json') , users);
        res.writeHead(200 ,{'Content-Type': 'application/json'});
        res.end(
            JSON.stringify(
                {
                    message: 'User deleted successfully.',
            })
        );
    }
}
server.listen(PORT ,
    () => {
        console.log(`server is running on port ${PORT}`);
    }
) ;
 