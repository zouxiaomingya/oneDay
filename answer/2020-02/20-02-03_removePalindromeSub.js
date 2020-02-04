/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    let len = s.toString().length;
    if(len === 0) return 0;
    for(let i = 0; i < len; i++){
        if(s[i] != s[len-1-i]) {
            return 2
        }
    }
    return 1;

};