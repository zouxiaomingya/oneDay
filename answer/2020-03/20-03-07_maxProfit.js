/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length < 2) return 0;
    var dp = [0];
    var min = prices[0];
    for(let i = 1; i < prices.length; i++){
      if(prices[i] < min){
        min = prices[i];
        dp[i] = dp[i-1];
      } else {
        dp[i] = Math.max(prices[i] - min, dp[i-1]);
      }
    }
    return dp[prices.length-1];
  };