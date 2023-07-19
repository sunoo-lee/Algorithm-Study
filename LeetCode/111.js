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
var minDepth = function(root) {
  if (!root) return 0;
  const queue = [];
  let depth = 0;

  queue.push(root);

  while(queue.length) {
    depth++;
    nodeCount = queue.length;

    for (let i = 0; i<nodeCount; ++i) {
      node = queue.shift();
      if(node.left === null && node.right === null) return depth;
      if(node.left) {
        queue.push(node.left);
      }
      if(node.right) {
        queue.push(node.right);
      }
    }
  }
};
