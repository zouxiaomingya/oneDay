/**
 * @param {number[]} A
 * @return {number}
 */
var minIncrementForUnique = function(A) {
  var result=0;
  A.sort((a,b)=>a-b);
  for(var i=1;i<A.length;i++){
      if(A[i]<=A[i-1]){
          var oldItem=A[i];
          A[i]=A[i-1]+1;
          result+=(A[i]-oldItem);
      }
  }
  return result;
};