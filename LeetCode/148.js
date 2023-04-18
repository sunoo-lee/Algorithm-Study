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
var sortList = function(head) {
  if(head === null) return null;
  let current = head;
  let tail = head;
  const array = [];
    
  while (current) {
    array.push(current);
    tail = current.next;
    current.next = null;
    current = tail;
  }

  array.sort((a, b) => a.val - b.val);

  for(let i=1; i<array.length; ++i) {
    array[i-1].next = array[i];
  }

  return array[0];
};
