/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  let temp = false;
  for(let i = 0; i < num / 2 + 1; i++){
      if(i * i === num){
          temp = true;
          break;
      }
  }
  return temp;
};