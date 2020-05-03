/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
 * @return {boolean}
 */
const tt = {
    val: 1,
    left:
    {
        val: 2,
        left: { val: 3, left: null, right: null },
        right: { val: 4, left: null, right: null }
    },
    right:
    {
        val: 2,
        left: { val: 4, left: null, right: { val: 2, left: null, right: null } },
        right: { val: 3, left: null, right: { val: 2, left: null, right: null } }
    }
}

//recursively
var isSymmetric = function (root) {
    // debugger

    if (!root) {
        return null
    }

    return isSymmetric(root.left) === isSymmetric(root.right)
};
console.log(isSymmetric(tt));

// @lc code=end

