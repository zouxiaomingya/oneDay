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
    if(l1 === null) return l2;
    if(l2 === null) return l1;
    let first = new ListNode(null);
    let head1 = l1, head2 = l2, head = first;
    let flag = false; // 判断是否要进位
    while(head1 !== null || head2 !== null || flag) {
        let t = 0;
        if(head1 === null) {
            t = head2 ? head2.val : 0;
        } else if(head2 === null) {
            t = head1 ? head1.val : 0;
        } else {
            t = head1.val + head2.val;
        }
        flag && (t += 1) && (flag = false);
        t > 9 && (flag = true);
        if(head.val === null) {
            head.val = t % 10;
        } else {
            head.next = new ListNode(t % 10);
            head = head.next;
        }
        head1 = head1 === null ? head1 : head1.next;
        head2 = head2 === null ? head2 : head2.next;
    }
    return first;
};