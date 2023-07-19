/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let list1 = '';
  let list2 = '';

  while (l1 || l2) {
    if(l1) {
      list1 += l1.val;
      l1 = l1.next;
    }
    if(l2) {
      list2 += l2.val;
      l2 = l2.next;
    }
  }

  list1 = BigInt(list1);
  list2 = BigInt(list2);

  let sum = 0;

  sum = (list1 + list2).toString();

  let result = new ListNode(Number(sum[0]));
  let curr = result;

  for(let i=1; i<sum.length; ++i) {
    curr.next = new ListNode(Number(sum[i]));
    curr = curr.next;
  }

  return result;
};
