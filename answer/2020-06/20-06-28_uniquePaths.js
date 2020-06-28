/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  var dp = new Array(m);
  for(var i = 0;i<n;i++){
      dp[i] = new Array(m);
      dp[i][0] = 1;
  }
  for(var r = 0;r < m;r++){
      dp[0][r] = 1;
  }
  for(var j = 1;j<n;j++){
      for(var z = 1;z<m;z++){
          dp[j][z] = dp[j-1][z]+dp[j][z-1]
      }
  }
  return dp[n-1][m-1];
};