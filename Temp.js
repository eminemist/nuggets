// solve = (A) =>{
//        const q = [];
//         q.push('1');
//         q.push("2");

//         let i = 0;
//         while (i < A) {
//             console.log(q)
//             let val = q[i];
//             q.push(val + '1');
//             q.push(val + '2');
//             i++;
//         }
//         console.log(q[A-1])
//         return q[A - 1] + (q[A - 1].split("").reverse().join(""));
//     }

// console.log(solve(15),

// function diffArray(arr1) {
//   console.log(arr1);
//   var newArray = arr2.concat(arr1); //first joininng both arrays inn one and storing it in newArray
//   // console.log(newArray)
//   var newestArray = [];

//   for (var i = 0; i < newArray.length; i++) {
//     //NOW COMPARING EACH ELEMENT OF  newArray  WITH ARR1 AD ARR2 AND PUSHING NOT SAME VALUES TO newestArray
//     if (arr1.indexOf(newArray[i]) === -1) {
//       newestArray.push(newArray[i]);
//     } //Solution to my problem,I put this braces after the next if, because of that next if was not running.

//     if (arr2.indexOf(newArray[i]) === -1) {
//       newestArray.push(newArray[i]);
//     }
//   }

//   return newestArray;
// }
// ,
// console.log(diffArray([1, 2, 3, 1, 2, 3], 5, 7, 8, 9, 5, 34, 3))

// let obj= {
//     name : 'kunal',
//     lastname: 'singh',
//     age: 98
// }
// console.log(obj)

// let newObj = {...obj,location:98}

// console.log(newObj)

// let arr=[1,2,3,4,5,6,7]
// console.log(arr)

// let newArr = [...arr,123456,123456,2345]

// console.log(newArr)

// for (let index = 1; index <= 5; index++) {
//     setTimeout(()=>console.log(index),1000)

// }

// for (var index = 1; index <= 5; index++) {
//   setTimeout((index) => console.log(index), 1000);
// }

// function func1() {
//   return {
//     name: "Akarshan",
//   };
// }

// function func2() {
//   return;
//   {
//     name: "Akarshan";
//   }
// }

// console.log(func1());
// console.log(func2());

// function func() {
//   abc = "Variable";
//   function abc() {
//     return "Function";
//   }
//   return abc();
// }
// console.log(func());

// function mul(x) {
//   return function (y) {
//     return function (z) {
//       return x * y * z;
//     };
//   };
// }

// console.log(mul(2)(3)(4));

// console.log("1");

// setTimeout(function () {
//   console.log("2");
// }, 0);

// console.log("3");
//,
//console.log(parseInt(-1 / 2))
