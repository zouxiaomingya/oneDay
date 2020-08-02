/**
 * @param {number[]} A
 * @return {number}
 */
var partitionDisjoint = function (A) {
  const len = A.length;
  const left = [];
  const right = [];
  left[0] = A[0];
  right[len - 1] = A[len - 1];

  for (let i = 1; i < len; i++) {
    left[i] = Math.max(left[i - 1], A[i - 1]);
  }

  for (let j = len - 2; j >= 0; j--) {
    right[j] = Math.min(right[j + 1], A[j + 1]);
  }

  for (let i = 0; i < len; i++) {
    if (right[i] >= left[i]) {
      return i + 1;
    }
  }
};


var partitionDisjoint = function(A) {
  let res=0,
      leftMax=A[0], // 存贮左侧最大值
      nextMax=A[0]; // 遍历时存储指针的最大值
  for(let i=1; i<A.length; i++){
      nextMax=Math.max(nextMax,A[i]);
      if(A[i]>=leftMax) continue;
      res=i;
      leftMax=nextMax;
  }
  return res+1
};

console.log(partitionDisjoint([3,2,3,1,4,5]));
