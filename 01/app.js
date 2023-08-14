console.log('hello this is  node')

//console.log(global)

//import os1 from 'os'

const os2 = require('os')
const path = require('path');


//const calc = require('./calc')
//console.log(calc.add(2, 3));

const {add ,subtract,multiply,divide} = require("./calc");
console.log(add(2,3))
console.log(subtract(2, 3));
console.log(multiply(2, 3));
console.log(divide(2, 3));


// console.log(os2.homedir+' line 1')
// console.log(os2.type+" line 2")
// console.log(os2.version+" line 3")

// console.log(__dirname +" line 4")
// console.log(__filename+" Line 5")

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))


