//import { error } from 'console';
//import fs from 'fs';
//const fs = require('fs')
const path = require("path");

const fsPromise = require("fs").promises;
const fileops = async () => {
  try {
    const data = await fsPromise.readFile(path.join(__dirname, "files", "file2.txt"),"utf-8");
    console.log(data);
    await fsPromise.writeFile(path.join(__dirname, "files", "file2.txt"), data);
    await fsPromise.appendFile(path.join(__dirname, "files", "file2.txt"),'\n\n\nAppend 2');
    await fsPromise.rename(
      path.join(__dirname, "files", "file2.txt"),
      path.join(__dirname, "files", "file222222.txt")
    );
    const newData = await fsPromise.readFile(
      path.join(__dirname, "files", "file222222.txt"),
      "utf-8"
    );
    console.log(newData)


  } catch (error) {
    console.log(error);
  }
};

fileops();
// fs.readFile('./file.txt','utf8', (error,data) => {
//     if(error) throw error;

//     console.log(data)
// })

// fs.readFile(path.join(__dirname , 'files' , 'file1.txt'),'utf8', (error,data) => {
//     if(error) throw error;

//     console.log(data)
// })

// fs.writeFile(path.join(__dirname, 'files' , 'file2.txt'), 'Som e text ' ,(err) => {
//     console.log("complete")

//     fs.appendFile(path.join(__dirname, 'files' , 'file2.txt') ,'\n\n Yes appended', (err) => {
//         if(err) throw err
//         console.log("Done appende")

//         fs.rename(path.join(__dirname, 'files' , 'file2.txt') , path.join(__dirname , 'files' , 'file22222.txt') , (err) =>{
//             if(err) throw err
//             console.log("Rename done")
//         })
//     })
// })

process.on("uncaughtException", (err) => {
  console.error(`There was an uncauth error :  ${err}`);
  process.exit(1);
});
