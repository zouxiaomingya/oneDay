/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    const newArr = nums.sort((a, b) => a -b);
    for(let i = 0; i < newArr.length; i++){
        if(newArr[i] === newArr[i+1]){
            return newArr[i];
        }
    }
};  