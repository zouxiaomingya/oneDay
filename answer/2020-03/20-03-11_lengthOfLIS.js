/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if(!nums || !nums.length){
      return 0;
  }
  var dp = new Array(nums.length).fill(1);
  var max = 1;
  for(var i = 1; i < nums.length; i++){
      var imax = 0;
      for(var j = i - 1; j >= 0; j--){
          if(nums[i] > nums[j]){
              dp[i] = Math.max(dp[j] + 1, dp[i])
          }
      }
      max = Math.max(dp[i], max);
  }
  return max;
}