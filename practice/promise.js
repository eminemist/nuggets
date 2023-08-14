let cars = {
  bmw: ["x6", "x7", "x8"],
  merc: ["gla", "glx", "glc"],
  audi: ["a6", "a7", "a8"],
};

let is_buying = true;

const { error } = require("console");
//let is_buying=false

// let order = (car)=>{

//         return new Promise((resolve,reject) =>{
//             if(is_buying){
//                 resolve(console.log(car))
//             }
//             else{
//                 reject(console.log('no buy'))
//             }
//         })

// }

// order(() => {
//   return `${cars.bmw[0]} ${cars.audi[0]} ${cars.merc[0]}`;
// })
//   .then(() => {
//     return `${cars.bmw[1]} ${cars.audi[1]} ${cars.merc[1]}`;
//   })
//   .then(() => {
//     return `${cars.bmw[2]} ${cars.audi[2]} ${cars.merc[2]}`;
//   })
//   .catch(() =>{
//   // return is_buying=false
//   })

// let statuse
// let Promiseee = new Promise ((resolve,reject)=>{

//     if(statuse === 'resolved'){
//     resolve(
//         console.log('resolved')
//     )
//     }
//     else{
//     reject(
//         console.log('rejected')
//     )
//    }
// })

// Promiseee.then((statuse)=>{statuse='rejected'})

// const promise1 = new Promise((resolve, reject) => {
//   resolve("Success!");
// });
// promise1.then((value) => {
//   console.log("value");
//   // Expected output: "Success!"
// });

// order(`${cars.bmw[0]} ${cars.audi[0]} ${cars.merc[0]}`)
//   .then(`${cars.bmw[1]} ${cars.audi[1]} ${cars.merc[1]}`)
//   .then(`${cars.bmw[2]} ${cars.audi[2]} ${cars.merc[2]}`)
//.catch(is_buying=false)

//   Promise.resolve().then(()=>{console.log("hereeeeee")}).then(()=>{console.log('last here')})
//   Promise.reject().catch(()=>{console.log('rejected')})







// const fs = require("fs");

// const readFilePromise = (path) =>
//   new Promise((resolve, reject) => {
//     fs.readFile(path, "utf-8", (error, result) => {
//       if (error) {
//         reject(error);
//       } else {
//         resolve(result);
//       }
//     });
//   });

// readFilePromise("./data.txt")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });




/////////////////////////////////////////IMPORTANT

const add = (a,b) =>{
 return new Promise((resolve, reject) => {
   
      if (a<0 || b<0) {
        reject('reject addition')
      } else {
        resolve(a+b);
      }
    });
}

const sub = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a > 0 || b > 0) {
      reject("reject subtraction");
    } else {
      resolve(a - b);
    }
  });
};


add(3,2)
.then((result) => {console.log(result); return sub(3,-2)})
  .then((result) => {
    console.log(result);
  })
  .catch((msg) => {
    console.error(msg);
  }).finally(()=>{console.log("reached both functions");})