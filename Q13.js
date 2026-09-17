//Q13
const EventEmitter = require('node:events');
const emitter = new EventEmitter();

emitter.on('login' , (userName) => {
    console.log(`User logged in: ${userName}`);
});

emitter.emit('login' , "Ahmed");