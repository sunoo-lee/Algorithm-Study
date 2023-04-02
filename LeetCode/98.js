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
var isValidBST = function(root) {
    if (!root) return [];
    const node = root;
    const data = [];

    const traverse = (node) => {
        if(node.left) traverse(node.left);
        data.push(node.val);
        if(node.right) traverse(node.right);
    }
    traverse(node);

    for (let i = 1; i< data.length; ++i) {
        if(!(data[i - 1] < data[i])) return false;
    }
    return true;
};
