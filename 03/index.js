const logEvents = require('./logEvents')


const EventEmitter = require('events')

class MyEmitter extends EventEmitter{};

//initialize object
const myEmitter = new MyEmitter();


//add a listener
myEmitter.on("log", (msg) => logEvents(msg));


//emit an event 
setTimeout(() => {
    myEmitter.emit('log' , 'Log event emitted!')//small myEmitter
},2000);



