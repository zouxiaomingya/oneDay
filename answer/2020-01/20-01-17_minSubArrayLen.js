/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

var minSubArrayLen = function(s, nums) {
  const len = nums.length;
  if (len == 0) {
      return 0;
  }
  let left = 0;
  let right = 0;
  let sum = 0;
  let min =  Number.MAX_VALUE;
  while (right < len) {
      sum += nums[right];
      right++;
      while (sum >= s) {
          min = Math.min(min, right - left);
          sum -= nums[left];
          left++;
      }
  }
  return min == Number.MAX_VALUE ? 0 : min;
};