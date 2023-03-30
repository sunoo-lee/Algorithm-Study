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
var detectCycle = function(head) {
    let tor = head;
    let hare = head;

    while (hare && hare.next) {
        tor = tor.next;
        hare = hare.next.next;
        if (tor === hare) {
            tor = head;
            while(tor !== hare){
                tor = tor.next;
                hare = hare.next;
            }
            return tor;
        }
    }
    return null;
};
