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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if (!root) return true;

  const traverse = (node) => {
    if(!node) return 0;
    let leftDepth =  traverse(node.left);
    let rightDepth = traverse(node.right);
    
    if(leftDepth === -1 || rightDepth === -1 || Math.abs(leftDepth - rightDepth) > 1) return -1;

    return 1 + Math.max(leftDepth, rightDepth);
  }

  return traverse(root) !== -1 ? true : false;
};
