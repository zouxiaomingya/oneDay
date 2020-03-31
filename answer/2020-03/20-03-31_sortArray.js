/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
  return nums.sort((a,b) => a-b)
};

var sortArray = function(nums) {
  if(nums.length === 1) return nums;
  const [head, rest] = nums;
  let left = [];
  let right = [];
  for (let i of rest){
    i < head ? left.push(i) : right.push(i);
  } 
  return [...left, head, ...right];
};