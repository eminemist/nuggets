const canSum = (targetValue, numbers, memo = {}) => {
  if (targetValue in memo) return memo[targetValue];
  if (targetValue === 0) return true;
  if (targetValue < 0) return false;

  for (let num of numbers) {
    const remainder = targetValue - num;
    if (canSum(remainder, numbers,memo) === true) {
      memo[targetValue] = true;
      return true;
    }
  }
  memo[targetValue] = false;
  return false;
};

console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
