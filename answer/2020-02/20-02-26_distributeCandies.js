/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  var result = new Array(num_people).fill(0);
  var i = 1;
  while(candies > 0){
      var temp = (i - 1 + num_people) % num_people;
      result[temp] =  result[temp] + (candies > i ? i : candies)
      candies -= i++;
  }
  return result;
};