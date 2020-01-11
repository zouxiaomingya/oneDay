/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let len = nums.length
    let dist = 0
    
    for (let i = 0; i < len - 1 && dist >= i; i++) {
      dist = Math.max(dist, i + nums[i])
    }
    return dist >= len - 1
  };