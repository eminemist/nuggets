const fiboMemo = (n, memo = {}) => {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 2) return 1;

  memo[n] = fiboMemo(n - 1) + fiboMemo(n - 2);

  return memo[n];
};

console.log(fiboMemo(1));
console.log(fiboMemo(2));
console.log(fiboMemo(3));
console.log(fiboMemo(4));
console.log(fiboMemo(5));
console.log(fiboMemo(6));
console.log(fiboMemo(7));
console.log(fiboMemo(8));
console.log(fiboMemo(9));
