/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

/**
 * 动态规划解决问题。 拆分问题，
 * 1. 假如text1的最后一个元素 与 text2 的最后一个元素相等，
 * 那么 text1 和 text2 的 LCS 就等于 {text1 减去最后一个元素} 
 * 与 {text2 减去最后一个元素} 的 LCS  再加上 text1 和 text2 相等的最后一个元素。
 * 2.假如 text1 的最后一个元素 与 text2 的最后一个元素不等，
 * 那么 text1 和 text2 的 LCS 就等于 ： {text1 减去最后一个元素} 
 *  与 text2 的 LCS， { text2 减去最后一个元素} 与 text1 的LCS 中的这两个较大的那个序列。
 */
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length;
    let m = text2.length;
    let dp = Array.from(new Array(n+1),() => new Array(m+1).fill(0));
    for(let i = 1;i <= n;i++){
        for(let j = 1;j <= m;j++){
            if(text1[i-1] == text2[j-1]){
                dp[i][j] = dp[i-1][j-1] + 1;
            }else{
                dp[i][j] = Math.max(dp[i][j-1],dp[i-1][j]);
            }
        }
    }
    return dp[n][m];
};