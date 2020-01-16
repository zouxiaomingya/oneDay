var coinChange = function(coins, amount) {
  let dp = [0];
  for (let i = 1; i < amount + 1; i++) {
    dp[i] = Number.MAX_VALUE;
    for (let coin of coins) {
      if (i >= coin && dp[i - coin] !== -1) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
    if (dp[i] === Number.MAX_VALUE) dp[i] = -1;
  }
  return dp[amount];
};
const result = coinChange([1, 2, 5], 11);
console.log(result);
