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
    //step1. bfs to check left and right.
    //notice: left node search from left to right.
    //notice: right node search from right to left.
    if (root.left == null && root.right == null)
        return true;
    if (root.left == null && root.right != null || root.left != null && root.right == null)
        return false;
    let leftRoot = root.left;
    let rightRoot = root.right;
    let leftQueue = [leftRoot];
    let rightQueue = [rightRoot];
    let lr = "";//left result;
    let rr = "";//right result;
    while (leftQueue.length != 0 && rightQueue.length != 0) {
        for (let index = 0; index < leftQueue.length; index++) {
            let tpleft = leftQueue.pop();
            // console.log(tpleft);
            // console.log(leftQueue.length);
            lr += tpleft.val + "";

            let tpright = rightQueue.pop();
            rr += tpright.val + "";
            if (tpleft.left != null) {
                lr += tpleft.left.val;
                leftQueue.push(tpleft.left);
            }else{
                lr += "null";
            }
            if (tpleft.right != null) {
                lr += tpleft.right.val;
                leftQueue.push(tpleft.right);
            }else{
                lr += "null";
            }

            if (tpright.right != null) {
                rr += tpright.right.val;
                rightQueue.push(tpright.right);
            }else{
                rr += "null";
            }
            if (tpright.left != null) {
                rr += tpright.left.val;
                rightQueue.push(tpright.left);
            }else{
                rr += "null";
            }
        }

    }
    // console.log(lr,' ',rr);
    return lr == rr;
};