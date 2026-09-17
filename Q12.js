//Q12
const EventEmitter = require('node:events');
const emitter = new EventEmitter();

emitter.on('start' , () => {
    console.log('Welcome event triggered!') ;
})

emitter.emit('start');