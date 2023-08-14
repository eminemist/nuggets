const bestSum = (targetValue, numbers,memo={}) => {
    
    if(targetValue in memo)return memo[targetValue]
  if (targetValue === 0) return [];
  if (targetValue < 0) return null;

  let shortestCombination = null;
  for (let num of numbers) {
    const remainder = targetValue - num;
    const remainderResult = bestSum(remainder, numbers,memo);
    if (remainderResult !== null) {
      const combination = [...remainderResult, num];
      if (shortestCombination === null || combination.length < shortestCombination.length) {
        shortestCombination = combination;
      }
    }
  }

  memo[targetValue]=shortestCombination
  return memo[targetValue];
};

console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(100, [1, 2, 5, 25]));
