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
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if(!root) return null;

  let node = root;
  const queue = [];

  queue.push(node);

  while (queue.length) {
    node = queue.shift();

    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;

    if(node.left) queue.push(node.left);
    if(node.right) queue.push(node.right);
  }

  return root;
};
