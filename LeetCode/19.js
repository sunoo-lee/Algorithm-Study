/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let last = new ListNode();
    let pre = new ListNode();
    if(!head.next) return last.next;
    let current = head;
    let nodeCounter = 0;

    while (current) {
        current = current.next;
        nodeCounter++;
    }

    if(nodeCounter === n) return head.next;

    nodeCounter -= n;
    current = head;

    while (nodeCounter > 0) {
        pre = current;
        current = current.next;
        last = current.next;
        nodeCounter--;
    }

    pre.next = last;
    current.next = null;


    return head;
};
