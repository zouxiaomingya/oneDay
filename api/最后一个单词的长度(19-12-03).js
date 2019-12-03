
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let stringLength = 0;
    let arr = s.split(' ');
    for (let i = arr.length -1; i >= 0; i--) {
        if (arr[i] === '') {
            continue;
        } else {
            stringLength =  arr[i].length;
            break;
        }
    }
    return stringLength
};