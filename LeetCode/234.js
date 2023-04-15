/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let current = head;
    let nodeCounter = [];

    while (current) {
        nodeCounter.push(current.val);
        current = current.next;
    }

    let left = 0;
    let right = 0;

    for(left = 0, right = nodeCounter.length-1; left < nodeCounter.length-1, right > 0; left++, right--){
        if(nodeCounter[left] !== nodeCounter[right]) return false;
    }
    
    return true;
};
