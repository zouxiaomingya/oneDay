/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  let res = [];
  let len1 = nums1.length, len2 = nums2.length;
  for(let i = 0; i < len1; i++) {
      let hasNextGreaterNum = false;
      let index = nums2.indexOf(nums1[i]);
      for(let j = index + 1; j < len2; j++) {
          if(nums2[j] > nums1[i]) {
              res.push(nums2[j]);
              hasNextGreaterNum = true;
              break;
          }
      }
      if(!hasNextGreaterNum) {
          res.push(-1);
      }
  }
  return res;
};
var nums1 = [2,4];
var nums2 = [1,2,3,4];
var result = nextGreaterElement(nums1, nums2)
console.log(result);
