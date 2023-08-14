const howSum = (targetValue, numbers, memo = {}) => {
  if (targetValue in memo) return memo[targetValue];
  if (targetValue === 0) return [];
  if (targetValue < 0) return null;

  for (let num of numbers) {
    const remainder = targetValue - num;
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[targetValue] = [...remainderResult, num];
      return memo[targetValue];
    }
  }
  memo[targetValue] = null;
  return memo[targetValue];
};

console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));
