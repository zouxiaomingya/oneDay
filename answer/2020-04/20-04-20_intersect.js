/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const obj = {}
    const arr = []
    for(let i = 0; i < nums1.length; i++){
        if(obj[nums1[i]]) {
            obj[nums1[i]] += 1
        } else{
            obj[nums1[i]] = 1;
        }
        
    }
    for(let i = 0; i < nums2.length; i++){
        if(obj[nums2[i]]){
            obj[nums2[i]] -= 1;
            arr.push(nums2[i])
        }
    }
    return arr;
};