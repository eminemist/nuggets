const EventEmitter = require ('events')

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();


myEmitter.on('Random',(args)=>{
if(args[2]==='sub'){
    console.log('yes')
}
else{
    console.log('no');
}
})

myEmitter.emit('Random',([1,2,'subfyi']))

//myEmitter.addListener("Not", myEmitter.emit('Random',([1,2,'sub'])));


//myEmitter.addListener('Not',(...some)=>{console.log(some)})


