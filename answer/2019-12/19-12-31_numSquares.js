/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  const dp = [0];
  const sqrt = Math.sqrt(n);
  for(let i = 1; i <= n; i++){
      dp[i] = dp[i-1]+1;
      for(let j = 1; j <= sqrt; j++ ){
          if(j*j > i){
              break;
          }else{
              dp[i] = Math.min(dp[i - j*j] + 1, dp[i]);
          }
      }
  }
  return dp[n];
};