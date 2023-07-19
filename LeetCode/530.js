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
var getMinimumDifference = function(root) {
  if (!root) return [];
  const node = root;
  const data = [];
  
  let difference = Infinity;

  const traverse = (node) => {
    if(node.left) traverse(node.left);
    data.push(node.val);
    if(node.right) traverse(node.right);
  }
  traverse(node);

  for (let i = 1; i < data.length; ++i) {
    let tmp = data[i] - data[i-1];
    if (tmp < difference) difference = tmp;
    if (difference === 1) break;
  }

  return difference;
};
