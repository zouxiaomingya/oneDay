/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
  let start = 0, end = 1, res = 1,
      max = [nums[0]],
      min = [nums[0]];
  while(end < nums.length){
      while(max.length > 0 && max[max.length - 1] < nums[end]){
          max.pop();
      }
      while(min.length > 0 && min[min.length - 1] > nums[end]){
          min.pop();
      }
      max.push(nums[end]);
      min.push(nums[end]);
      while(max[0] - min[0] > limit){
          if(max[0] == nums[start]){
              max.shift();
          }
          if(min[0] == nums[start]){
              min.shift();
          }
          start++;
      }
      res = Math.max(res, end - start + 1);
      end++;
  }
  return res;
};
