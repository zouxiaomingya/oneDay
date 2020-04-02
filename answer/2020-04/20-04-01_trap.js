/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let total = 0;
    height.forEach((item, index) => {
        let leftMax = 0, rightMax = 0;
        for (var i = 0; i <= index; i++) {
            leftMax = Math.max(height[i], leftMax);
        }
        for (var i = index; i < height.length; i++) {
            rightMax = Math.max(height[i], rightMax);
        }
        total += Math.min(leftMax, rightMax) - item
    })
    return total;
};

