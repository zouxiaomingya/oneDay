/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    var newNums = nums.sort((a, b)=>a-b);
    const midNums = parseInt(nums.length / 2);
    return nums[midNums];
};