const fs = require('fs')

const rs = fs.createReadStream('./files/lorem.txt', {encoding: 'utf-8'});
const ws = fs.createWriteStream('./files/new_lorem.txt')

// rs.on('data',(dataFromFile) => {
//     ws.write(dataFromFile)
// })

rs.pipe(ws)