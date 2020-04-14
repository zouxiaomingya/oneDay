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
    let stack1 = [];
    let stack2 = [];
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    let mark = 0;
    let res = null;
    while (stack1.length > 0 || stack2.length > 0 || mark !== 0) {
        let val1 = stack1.length > 0 ? stack1.pop() : 0;
        let val2 = stack2.length > 0 ? stack2.pop() : 0;
        let val = val1 + val2 + mark;
        mark = val / 10 | 0;
        curNode = new ListNode(val % 10);
        curNode.next = res;
        res = curNode;
    }
    return res;
};