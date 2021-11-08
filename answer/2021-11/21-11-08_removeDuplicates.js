/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function (nums) {
  let count = 0
  let n = nums.length
  if (n < 3) return n
  let j = 1
  for (let i = 2; i < n; i++) {
      if (nums[i] != nums[j - 1]) {
          j++
          nums[j] = nums[i]
      }
  }
  return j + 1
};