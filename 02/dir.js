const fs = require('fs')

if(!fs.existsSync('./New Folder')){
fs.mkdir('./New Folder' , (err) => {
    if(err) throw err
console.log('Created')
})
}

if(fs.existsSync('./New Folder')){
    fs.rmdir('./New Folder',(err) =>{
        if(err) throw err
        console.log('Removed')
    })
}