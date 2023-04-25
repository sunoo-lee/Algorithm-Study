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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  if (!root) return 0;

  let sumMap = new Map();

  const traverse = (node) => {
    getSum(node, 0);
    if(node.left) traverse(node.left);
    if(node.right) traverse(node.right);
  }

  const getSum = (node, sum) => {
    if(!node) return;
    sum += node.val;
    
    sumMap.has(sum) ? sumMap.set(sum, sumMap.get(sum) + 1) : sumMap.set(sum, 1);
    if(node.left) getSum(node.left, sum);
    if(node.right) getSum(node.right, sum);
  }
  traverse(root);

  return sumMap.has(targetSum) ? sumMap.get(targetSum) : 0;
};
