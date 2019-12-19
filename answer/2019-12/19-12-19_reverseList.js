/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  var pre = null;
  while(head != null){
      var temp = head.next;
      head.next = pre;
      pre = head;
      head = temp;

  }
  return pre; 
};