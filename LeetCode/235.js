/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (!root) return [];
    let node = root;

    while(node) {
        if(node.val < p.val && node.val < q.val) {
            node = node.right;
        } else if (node.val > p.val && node.val > q.val) {
            node = node.left;
        } else {
            break;
        }
    }
    
    return node;
};
