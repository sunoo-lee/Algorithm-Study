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
var maxLevelSum = function(root) {
  if (!root) return [];
  let node = root;
  const data = [];
  const queue = [];
  const nodeValues = [];
  let nodeCount = 0;

  queue.push(node);
  data.push(node.val);

  while(queue.length) {
    nodeCount = queue.length;
    nodeValues.length = 0;

    for (let i = 0; i<nodeCount; ++i) {
      node = queue.shift();
      if(node.left) {
        queue.push(node.left);
        nodeValues.push(node.left.val);
      }
      if(node.right) {
        queue.push(node.right);
        nodeValues.push(node.right.val);
      }
    }
    let tmp = nodeValues.reduce((acc, cur) => acc + cur, 0);
    data.push(tmp);
  }

  data.length -= 1;
  let result = data.findIndex((element) => element === Math.max(...data));

  return result + 1;
};
