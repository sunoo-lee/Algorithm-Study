/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  if(!root) return null;
  let array = [];

  const traverse = (node) => {
    if(!node) return;
    if(node.left) traverse(node.left);
    array.push(node.val);
    if(node.right) traverse(node.right);
  }

  traverse(root);
  return array[k-1];
};
