/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newList = new ListNode(null);
    let current = newList;

    console.dir(list1);

    while (list1 && list2) {
        if ( list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if(list1) {
        current.next = list1;
    } else if(list2) {
        current.next = list2;
    }
    newList = newList.next;

    return newList;
};
