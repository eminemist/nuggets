const http = require('http')
const path = require('path')
const fs = require('fs')
const fsPromise = require('fs/promises')

const PORT = process.env.PORT || 3000;

const server = http.createServer((req,res) =>{
    console.log(req.headers)
    
})

server.listen(PORT , () =>{
    console.log(`Listeinig on ${PORT}`)
})




const logEvents = require("./logEvents");
const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}

//initialize object
const myEmitter = new MyEmitter();

//add a listener
myEmitter.on("log", (msg) => logEvents(msg));

//emit an event
setTimeout(() => {
  myEmitter.emit("log", "Log event emitted!"); //small myEmitter
}, 2000);
