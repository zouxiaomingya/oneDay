/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  let i = 0;
  let array = [];
  while (i < l.length) {
    let start = l[i];
    let end = r[i];

    let arr = nums.slice(start, end + 1);

    arr = arr.sort((a, b) => b - a);

    let grap = arr[0] - arr[1];
    let flag = true;
    for (var k = 0; k < arr.length - 1; k++) {
      if (arr[k] - arr[k + 1] != grap) {
        flag = false;
        break;
      }
    }
    array.push(flag);

    i++;
  }

  return array;
};
