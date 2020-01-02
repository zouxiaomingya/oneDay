/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    while(s.indexOf('()') !== -1 || s.indexOf('[]') !== -1 || s.indexOf('{}') !== -1){
        s = s.replace('{}', '')
        s = s.replace('[]', '')
        s = s.replace('()', '')
    }
    return s === '';
};
const validStr = '({}{}[({})])'
const invalidStr = '{}[}[}[]'

isValid(validStr) // true
isValid(invalidStr) // true
