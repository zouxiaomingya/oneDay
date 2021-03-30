/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
 var isPrefixOfWord = function(sentence, searchWord) {
  const array = (' '+sentence).split(' '+searchWord)
  if(array.length === 1) return -1
  return array[0].split(' ').length
};