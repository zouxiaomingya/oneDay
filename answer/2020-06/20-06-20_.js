/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {
  var len = nums.length;
  if (len < 3) return 0;
  var res = 0;
  nums.sort((a, b) => a - b); // 升序
  for (var i = len - 1; i > 1; i--) {
    var l = 0,
      r = i - 1;
    while (l < r) {
      // 因为，l < r && nums[l] < nums[i] && nums[r] < nums[i]，所以 [l, r) 都满足
      if (nums[l] + nums[r] > nums[i]) {
        res += r - l;
        r--;
      } else {
        l++;
      }
    }
  }
  return res;
};
