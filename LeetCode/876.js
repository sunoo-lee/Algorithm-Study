/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let nodeCounter = 0;
    let current = head;

    while (current) {
        current = current.next;
        nodeCounter++;
    }

    nodeCounter = Math.floor(nodeCounter/2);
    current = head;

    while (nodeCounter) {
        current = current.next;
        nodeCounter--;
    }

    return current;
};
