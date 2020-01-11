/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head == null || head.next == null) return head;
  var man = head,
    quan = head,
    len = 0,
    Head = head;
  while (Head !== null) {
    Head = Head.next;
    len += 1;
  }
  k = k % len;
  if (k == 0) return head;
  while (k !== 0) {
    quan = quan.next;
    k -= 1;
  }
  while (quan.next !== null) {
    man = man.next;
    quan = quan.next;
  }
  Head = man.next;
  man.next = null;
  quan.next = head;
  return Head;
};
