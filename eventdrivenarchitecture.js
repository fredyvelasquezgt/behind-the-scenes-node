let events = require('events');

//creo un nuevo eventEmitter
let eventEmitter = new events.EventEmitter();

//listen the event - this is the listener
eventEmitter.on('connection',() => {
    console.log('Connection succesfull.');
})

//emitir el evento or fire the event
eventEmitter.emit('connection');
eventEmitter.emit('connections');
