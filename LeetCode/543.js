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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  if (!root) return true;
  let len = 0;

  const traverse = (node) => {
    if(!node) return 0;
    let leftDepth =  traverse(node.left);
    let rightDepth = traverse(node.right);

    len = len > leftDepth + rightDepth ? len : leftDepth + rightDepth;

    return 1 + Math.max(leftDepth, rightDepth);
  }

  traverse(root);
  
  return len;
};
