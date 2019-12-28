/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    for (var i = nums.length-1; i > 0; i--) {
        if (nums[i] > nums[i-1]) {
            var j = i;
            while (nums[j] > nums[i-1] && j <= nums.length-1) {
                j++;
            }
            swap(j-1, i-1);
            reserve(i);
            return
        }
    }
    if (i == 0) {
        reserve(i)
    }
    function reserve(start){
        var i = start, j = nums.length-1;
        while (i <=j) {
            var temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            i++;
            j--;
        }
        return nums
    }
    function swap(i, j) {
        var temp = nums[j]
        nums[j] =nums[i];
        nums[i] = temp;   
    }
};
