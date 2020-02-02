/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
  let length = s.length;
  
  // dp[i][j]表示的是从s[i]至s[j]之间的最长回文子序列的长度
  let dp = new Array(length);
  for (let i = 0; i < length; i++) {
      dp[i] = new Array(length).fill(0);
  }
  
  for (let i = length - 1; i >= 0; i--) {
      // 每一个字符都是一个回文字符串，因此对于dp[i][i]设置为1
      dp[i][i] = 1;
      for (let j = i+1; j < length; j++) {
          // 状态转移方程为:
          // 当s[i]等于s[j]时，dp[i][j] = dp[i-1][j+1] + 2;
          // 当s[i]不等于s[j]时，dp[i][j] = max(dp[i-1][j], dp[i][j+1])
          if (s[i] === s[j]) {
              dp[i][j] = dp[i+1][j-1] + 2;
          } else {
              dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
          }
      }
  }
  return dp[0][length-1];
};

longestPalindromeSubseq('baa')