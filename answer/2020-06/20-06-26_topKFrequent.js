/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  let map = new Map();
  words.forEach((item)=>{
      if(map.has(item)){
        map.set(item,map.get(item)+1);
      }else{
          map.set(item,1)
      }
  })
  let key = [...map].sort((a,b)=>b[1]-a[1]|| a[0].localeCompare(b[0]));
  key = key.map(item=>item[0]);
  return key.slice(0,k);
};