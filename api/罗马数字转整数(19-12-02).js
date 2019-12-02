/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romaMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
    }
    let result = 0
    const romaSplit = s.match(/(CM)|(CD)|(XC)|(XL)|(IX)|(IV)|(IX)|(\w)/g)
    for (const v of romaSplit) {
        result += romaMap[v]
    }
    return result
};