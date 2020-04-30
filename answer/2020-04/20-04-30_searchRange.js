/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var a = searchRange([1], 1);

function searchRange(nums, target) {
  let res = [-1, -1];
  low = 0;
  high = nums.length - 1;
  (left = 0), (right = 0);
  if (!nums.length || nums[0] > target || nums[nums.length - 1] < target) {
    return res;
  }
  
  while (low < high) {
    var mid = (low + high) >> 1;
    if (nums[mid] === target) break;
    nums[mid] > target ? (high = mid - 1) : (low = mid + 1);
  }
  console.log(mid, '>>>');

  if (nums[mid] != target) {
    console.log(1);
    
    return res;
  }
  left = right = mid;

  while (nums[left - 1] === target) {
    left -= 1;
  }
  while (nums[right + 1] === target) {
    right += 1;
  }
  return [left, right];
}

console.log(a);
