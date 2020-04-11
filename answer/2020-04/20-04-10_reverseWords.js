/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const newStr = s.trim();
    const reverseStr = newStr.split(' ').filter(item => item).reverse().join(' ');
    return reverseStr
};