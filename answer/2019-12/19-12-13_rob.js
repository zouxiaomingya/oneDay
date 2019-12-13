
/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
    if(nums.length == 0)
        return 0;
    const dp = [];
    dp[0] = 0;
    dp[1] = nums[0];
    for(let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
    }
    return dp[nums.length];
};