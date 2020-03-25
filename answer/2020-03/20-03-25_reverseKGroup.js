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
var reverseKGroup = function(head, k) {
  let pre = null;
  let cur = head;
  let p = head;
  //查找长度是否满足反转的数量
  for (let i = 0; i < k; i++) {
    if (p == null) return head;
    p = p.next;
  }
  // 前 k 个链表元素反转
  for (let j = 0; j < k; j++) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  // 反转后。head.next已经成为当前反转后链表的最后一个元素，它的指向将是下一个递归的开始点
  // 而此时pre已经是最后一个元素，cur是之后的链表
  head.next = reverseKGroup(cur, k);
  return pre;
};
