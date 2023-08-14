const next=(A)=>{
 const freq = new Array(1000).fill(0);

 for (let i = 1; i < A.length; i++) {
   freq[A[i]]+=1;
 }
 console.log(freq)

 } 
	

next([2, 2, 3,])