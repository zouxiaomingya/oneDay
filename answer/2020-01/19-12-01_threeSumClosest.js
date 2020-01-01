/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3) return;
    nums.sort((a, b) => a - b);
    // 初始化一个值
    var res = nums[0] + nums[1] + nums[nums.length - 1];
    for (var middle = 1; middle < nums.length - 1; middle++) {
      var start = 0,
        end = nums.length - 1;
      while (start < middle && end > middle) {
        var result = nums[start] + nums[end] + nums[middle];
        // 是否比初始化的值更加接近
        if (Math.abs(target - result) < Math.abs(target - res)) res = result;
        // 相等 直接返回
        if (result === target) {
          return result;
        }
        // 目标值比较大，说明初始化的值小了，所以左指针往 右走
        if (result < target) {
          start += 1;
        }
        // 目标值比较小，说明初始化的值大了，所以右指针往 左走
        if (result > target) {
          end -= 1;
        }
      }
    }
    return res;
  };
  