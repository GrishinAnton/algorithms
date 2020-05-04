/**
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
 */

// @lc code=start
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
 * @return {number[]}
 */
let tt = {
    val: 1,
    left: null,
    right:
    {
        val: 2,
        left: { val: 3, left: null, right: null },
        right: null
    }
}
//Сложность O(n)
//Recursive
var inorderTraversal = function (root) {
    if (!root) return []
    let result = []

    const inorderTraversalRecurs = (root) => {
        if (!root) return null

        inorderTraversalRecurs(root.left)
        result.push(root.val)
        inorderTraversalRecurs(root.right)
    }

    inorderTraversalRecurs(root)

    return result
};
console.log(inorderTraversal(tt));

//Iteratilely
// var inorderTraversal = function(root) {


// };
// @lc code=end

