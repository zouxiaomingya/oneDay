/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let arr1 = [],
      arr2 = [],
      arr3 = [];
  
  // l1 l2 转为数组
  while (l1 !== null) {
    arr1.push( l1.val );
    l1 = l1.next;
  }
  
  while (l2 !== null) {
    arr2.push( l2.val );
    l2 = l2.next;
  }
  
  // arr1 和 arr2 相加
  let carry = 0;
  while (arr1.length > 0 || arr2.length > 0 || carry > 0) {
    let n1 = arr1.pop(),
        n2 = arr2.pop();
    
    let { curr, last } = sum(n1, n2, carry);
    arr3.unshift( curr );
    carry = last;
  }
  
  // 建立新的链表，用 p 做指针，最终返回链表
  let ansnode = new ListNode( null );
  let p = ansnode;
  for (let i = 0, len = arr3.length; i < len; i++) {
    p.next = new ListNode( arr3[i] );
    p = p.next;
  }
  
  return ansnode.next;
};

// 辅助函数，计算三个数之和，返回和的 个位 和 进位
function sum(a = 0, b = 0, c = 0) {
  let s = a + b + c;
  let curr, last;
  
  if (s > 9) {
    s = String(s);
    curr = Number( s.slice(s.length - 1) );
    last = Number( s.slice(0, s.length - 1) );
  }
  else {
    curr = s;
    last = 0;
  }
  
  return {
    curr: curr,
    last: last
  }
}
