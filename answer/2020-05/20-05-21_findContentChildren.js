/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let gIndex=0,sIndex=0,res=0;
  let sortG=g.sort((a,b)=>a-b);
  let sortS=s.sort((a,b)=>a-b);
  while(gIndex<g.length&&sIndex<s.length){
      if(s[sIndex]>=g[gIndex]){
          res++;
          gIndex++;
      }
      sIndex++;
  }
  return res
};