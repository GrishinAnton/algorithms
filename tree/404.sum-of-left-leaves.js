/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
 * @return {number}
 */
//Сложность О(n)
var sumOfLeftLeaves = function (root, type = 'right') {
    if (!root) return 0
    if (!root.left && !root.right && type === 'left') {
        return root.val
    }
    if (!root.left && !root.right && type !== 'left') {
        return 0
    }

    return sumOfLeftLeaves(root.left, 'left') + sumOfLeftLeaves(root.right)
};
// @lc code=end

