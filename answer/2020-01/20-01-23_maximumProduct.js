/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    var length = nums.length
    nums.sort((a, b) => {
        return a - b
    })
    return Math.max(nums[0] * nums[1] * nums[length - 1], nums[length - 1] * nums[length - 2] * nums[length - 3])
}