/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  nums = nums.sort((a, b) => a - b);
  for (var i = 2; i < nums.length; i += 3) {
    if (nums[i] + nums[i - 1] + nums[i - 2] !== nums[i] * 3) {
      return nums[i] ^ nums[i - 1] ^ nums[i - 2];
    }
  }

  return nums[nums.length - 1];
};
