// const func = (A, B) => {
//          let mergerd=[],j=0,k=0

//         for(let i=0;i<(A.length+B.length);i++){
//             if(j===A.length){
//                 mergerd[i]=B[k]
//                 k++
//             }else if(k===B.length || A[j]<=B[k]){
//                 mergerd[i]=A[j]
//                 j++
//             }else if(A[j]>B[k]){
//                 mergerd[i]=B[k]
//                 k++
//             }
//         }return mergerd
// 	}


// }

//console.log(func([-4, 3], [-2,-2]));
//func(4,2)
//rec(4,2,1,1)

// const generateParenthesis =(A)=>{

//   let ans=[]
//   const rec = (A, open, close, s, ans) => {
//     if (open === A && close === A) {
//       ans.push(s);
//       return;
//     }
//     if (open < A) {
//       rec(A, open + 1, close, s + "{", ans);
//     }
//     if (close < open) {
//       rec(A, open, close + 1, s + "}", ans);
//     }
//   };
//   rec(A, 0, 0, "", ans);
//   return ans
// }

//console.log(generateParenthesis(3));
//console.log(ans)


// const some = (A) =>{
// // A.sort((a, b) => a - b);
// // console.log(A)
// // return A[1] - A[0];
// let min=Number.MAX_SAFE_letEGER,secMin=Number.MAX_SAFE_letEGER
//         for(let i=0;i<A.length;i++){
//             if(A[i]<min || A[i]===min){
//                 let temp=min    
//                 min=A[i]
//                 secMin=temp
//             }
//         }console.log(min,secMin)
//         return min-secMin
// }
// console.log(some([37,19,71,72,5,4,74,2,30,33,85,1,7,14,98,27,51,7,24,88,86,81,77,64,13,3,63,75,29,50,90,3,22,94,40,72,75,26,32,64,62,59,19,16]));

// var punishmentNumber = function (n) {
//   let result = 0;
//   const num = (number) => {
//     let prod = number * number;
//     let sumOfDigits = 0;
//    // console.log(number,prod,sumOfDigits)
//     while (prod != 0) {
//       sumOfDigits += prod % 10;
//       prod = parselet(prod / 10);
//       //console.log(sumOfDigits,prod)
//     }
//     if (sumOfDigits !== number) {
//       return false;
//     }
//     return true;
//   };

//   for (let i = 1; i <= n; i++) {
//     if (num(i)===true) {
//       result = result + i * i;
//     }
//   }
//   return result;
// };

// console.log(punishmentNumber())

// const somNum=(A, B)=>{
//         let count=0
//         const func =(sr,sc,dr,dc)=>{
//            if(sr>dr || sc>dc){
//             return
//           }
//           if(sr===dr && sc===dc){
//             count+=1
//             return
//           }
//           func(sr,sc+1,dr,dc)
//           func(sr+1,sc,dr,dc)
//         }
        
//         func(0,0,2,2)
//         return count
// 	}
//  console.log(somNum()); 

// const palli=(A)=>{
        
       
//       const isPallindrome=(num)=>{
//         let revNum=0,newNum=num
//         while(newNum!==0){
//             revNum=revNum*10+(newNum%10)
//             newNum = parselet(newNum / 10);
//         }
//         if(revNum===num) return true

//         return false
//     } 
//      while (isPallindrome(A) === false) {
//        A+=1;
//      }
//      return A;
// 	}
//   console.log(palli(74))

// const func =(A,B)=>{
//    let isPrime=[] ;
//         isPrime.fill(true);
//         console.log(isPrime);
//         for (let i = 0; i < 10; i++) {
//             isPrime[i] = false;
//         }
       
//         let ans=[]
//         for (let i = 2; i <= B; i++) {
//             if (isPrime[i]) {
//                 for (let j = i * i; j <= B && j >= 0; j = j + i) {
//                     if (j <= B)
//                         isPrime[j] = false;
//                 }
//                 if (i >= A && isPrime[i] && ((i == 3 && i % 3 == 0) || (i % 10 == 3))) {
//                     ans.add(i);
//                 }
//             }
//         }
//         console.log(isPrime)
//         return ans;

// }

// console.log(func(1,10))

//  const ifPalli = (A) => {
//    let i = parseInt(A.length / 2);
//    let carry = 0;
//    while (i !== 0) {
//      A[i] = A[i] + 1;
//      carry = 0;
//      if (A[i] > 9) {
//        A[i] = 0;
//        carry = 1;
//      }
//      i--;
//    }
//   return A
//  };
//  console.log(ifPalli("123521"))

// var maxSlidingWindow = function (nums, k) {
//   let result = [];
//   const window = (nums, start, end) => {
//     let max = Number.MIN_SAFE_INTEGER;
//     console.log(start,end)
//     while (start != end) {
//       max=Math.max(max,nums[start])
//       start++;
//     }return max
//   }

//   for (let i = 0; i <= nums.length-k; i++) {
//     result.push(window(nums, i , i+k));
//   }
//   return result;
// };

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));


// const pallin =(A)=>{
//   const isPallindrome=(num)=>{
//         let revNum=0,newNum=num
//         while(newNum!==0){
//             revNum=revNum*10+(newNum%10)
//             newNum = parseInt(newNum / 10);
//         }
//         if(revNum===num) return true

//         return false
//     } 
//     let i=0,revNum=0
//     while (i <A.length) {
//       revNum = revNum * 10 + (A[i]);
//       i++
//     }
//      while (isPallindrome(revNum) === false) {
//        revNum+=1;
//      }
//      return revNum;
// }

// console.log(pallin("74"))


//const funct = (A) => {
    //let stringNum=[]
    // for(let i=0;i<A.length;i++){
    //     stringNum.push(toString(A[i]))
    // }
    // console.log(stringNum)
    //const compareFunc = (a, b) => (a + b > b + a ? a : b);
    // A= A.join().split(",");
    // A.sort((a, b) => (b+a)-(a+b));
    //A = A.join().split(",").sort((a, b) => b + a - (a + b));
    //console.log(A)
    //let result=0
    //console.log(A[0])
    //for(let i=1;i<A.length;i++){
    //    A[0]+=A[i]
    //}
    //return A[0]
    //     var stringNum ="";
    // for (let i=0;i<A.length;i++) {
    //     stringNum=stringNum+A[i];
    // }
    //     return stringNum
	

//}


// const funct =(A) =>{
 
//   let nums = [];
//   while (A !== 0) {
//     nums.push(A % 10);
//     A = parseInt(A / 10);
//   }
//   nums.reverse();
//   let numberSet = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     let digit = 1;
//     for (let j = i; j < nums.length; j++) {
//       if (numberSet.has(digit * nums[j])) {
//         return 0;
//       } else {
//         numberSet.add(digit * nums[j]);
//       }
//     }
//   }
//   return 1;
  
// }
// console.log(funct(23));

function lpalli(A) {
 let array=[1,2,2,1]
        ,count=3
       
        // while(A.next!==null){
        //     array[count]=A.data
        //     A=A.next
        //     count++
        // }

        let i=0
        ,j=count
       while(i<=j){
           if(array[i] !== array[j]){
               return 0
           }
           i++
           j--
       }
       return 1
	}



console.log(lpalli([1,2,1]));
 

