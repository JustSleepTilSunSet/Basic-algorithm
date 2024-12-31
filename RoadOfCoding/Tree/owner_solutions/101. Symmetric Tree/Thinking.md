# 101. Symmetric Tree
  
#### 題意：
  
  - 檢查樹是否互為鏡像？
  - 以下的走訪為：
    - 故範例1為：
        - 左樹左葉起讀至右葉=> 2 -> 3 -> 4
        - 右樹左葉起讀至右葉=> 2 -> 4 -> 3
    - 左右兩個互為鏡像，這樣子判定為true;反之為false。

  - 解題時間:
    - [ Time taken: 25 m 28 s ]
* 範例1
  
```
       (1)
      /   \
    (2)    (2)
   /   \   /  \
  (3) (4) (4) (3)
```
  
^= 為true
  
* 範例2
```
       (1)
      /   \
    (2)    (2)
   /   \   /  \
  (3) (4) (3) (4)
```
  
^= 為false(因為左數的順序是234而右樹的順序是234)


#### 解題步驟：
  
  - 核心思路：鏡像的定義簡單一點就是`左樹左葉起至右葉;右樹右葉起至左葉`之結果相同，則判定為true;反之為false.

``` javascript
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
```
  
#### 心得:
  
  - 這題之所以簡單是因為怎麼展開都可以，隨便訂一個是`鏡像的規則`展開就好，我是用BFS展開，這個規則也是隨便找的;但其實dfs也可以。