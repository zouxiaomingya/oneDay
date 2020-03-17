/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let size = 0;
    let charMap = new Map();
    for(let char of chars) {
       // 遍历字母表，统计其中每个字母出现的频率
       charMap.set(char, (charMap.has(char) ? charMap.get(char) + 1 : 1));
    }
    // 双重循环，外层循环遍历单词数组中的每个单词
    for(let word of words) {
        // 单词Map，用于存放单词中每个字母的出现频率
        let wordMap = new Map();

        // 内层循环
        for(let char of word) {
            // 统计字符串（单词）中每个字母出现的频率
            wordMap.set(char, (wordMap.has(char) ? wordMap.get(char) + 1 : 1));
        }
        let enough = true;
        for(let char of word) {
           if(wordMap.get(char) > charMap.get(char) || charMap.get(char) === undefined) {
               enough = false;
               break;
           }
        }
        if(enough) {
            size += word.length;
        }
    }

    return  size;
};