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
var reverseList = function(head) {
    if(!head) return head;
    let newList = new ListNode(null);
    let result = newList;


    const pop = () => {
        let current = head;
        let tail = current;
        while(current.next) {
            tail = current;
            current = current.next;
        }
        tail.next = null;
        return current;
    }

    while ( head.next ) {
        newList.next = pop();
        newList = newList.next;
    }

    newList.next = head;

    return result = result.next;
};
