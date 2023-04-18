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
var oddEvenList = function(head) {
  if(head === null) return null;
  let current = head;
  const odds = [];
  const evens = [];

  while (current && current.next) {
    odds.push(current);
    current = current.next;
    evens.push(current);
    current = current.next;
  }
  odds.push(current);

  let array = [...odds, ...evens];
  array = array.filter(element => element !== null);

  for(let i=1; i<array.length; ++i) {
    array[i-1].next = array[i];
    current = array[i];
  }
  current.next = null;

  return array[0];
};
