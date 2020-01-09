/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const sum = 1 << nums.length;
  const sumArr = []
  const numTobinary = (num) => {
      return num.toString(2).padStart((sum-1).toString(2).length, 0);
  }
  for(let i = 0; i < sum; i++){
      const binary = numTobinary(i)
      const tempArr = []
      for(let j = 0; j < binary.length; j++){
          if(binary[j] === '1') tempArr.push(nums[j]);
      }
      sumArr.push(tempArr)
  }
  return sumArr
};