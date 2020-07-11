/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  var result = [];
  var subresult = [];
  function combineSub(start,subresult){
      //terminator
      if(subresult.length == k){
          result.push(subresult.slice(0));
          return;
      }
      for(var i= start;i<=n;i++){
          subresult.push(i);
          combineSub(i+1,subresult);
          subresult.pop();            
      }   
  }
  combineSub(1,subresult);
  return result;
};
