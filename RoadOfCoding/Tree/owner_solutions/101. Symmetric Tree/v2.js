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
var isSymmetric = function (root) {
    if (!root.left && !root.right) {
        return true;
    }
    // to recursive
    function isMirror(leftTree, rightTree) {
        // exist value;
        if (!leftTree || !rightTree) {
            return false;
        }
        if (leftTree.val == rightTree.val) {
            return true;
        }
        return isMirror(leftTree.left, rightTree.right) && isMirror(leftTree.right, rightTree.left);
    }
    let result = isMirror(root.left, root.right);
    console.log(result);
    return result;
};