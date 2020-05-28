/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length == 1) {
      return nums[0];
    } else if (nums.length == 0) {
      return 0;
    }
  
    var dp = [];
    dp[0] = nums[0];
    dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];
    dp[2] = Math.max(nums[0], nums[1], nums[2]);
    let one, two;
    for (let i = 3; i < nums.length; i++) {
      one = nums.slice(1, i - 1);
      two = nums.slice(0, i - 2);
      dp[i] = Math.max(nums[i] + mild(one), nums[i - 1] + mild(two));
    }
  
    //函数作用是，不考虑循环的，最大利益。即打家劫舍1.
    function mild(arr) {
      if (arr.length == 1) {
        return arr[0];
      }
  
      var d = [];
      d[0] = arr[0];
      d[1] = Math.max(arr[0], arr[1]);
  
      for (let j = 2; j < arr.length; j++) {
        d[j] = Math.max(d[j - 1], d[j - 2] + arr[j]);
      }
      return d[arr.length - 1];
    }
  
    return Math.max(dp[nums.length - 1], dp[nums.length - 2]);
  };