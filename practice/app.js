const EventEmitter = require('events')

class MyEmitter extends EventEmitter{}

const myEmitter = new MyEmitter();

const {logFunction} = require('./logger')

myEmitter.on('Logging', (message) =>{logFunction(message);});

myEmitter.emit('Logging',"Log1")

myEmitter.emit('Logging',"Log2")

setTimeout(() =>{
    myEmitter.emit("Logging", "Log3");
},5000);