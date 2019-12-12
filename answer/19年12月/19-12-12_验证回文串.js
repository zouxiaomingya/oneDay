 /**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const newStr = s.replace(/[^\w]/g, '').toLocaleLowerCase();
    for(let i = 0; i < newStr.length / 2; i++ ){
        if(newStr[i] !== newStr[newStr.length - i - 1]) {
            return false
        }
    }
    return true;
};