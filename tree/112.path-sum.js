/**
 * @lc app=leetcode id=112 lang=javascript
 *
 * [112] Path Sum
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
 * @param {number} sum
 * @return {boolean}
 */
//Сложность O(n)
var hasPathSum = function (root, sum, val = 0) {
    if (!root) return false
    if (val + root.val === sum && !root.left && !root.right) return true

    val += root.val


    return hasPathSum(root.left, sum, val) || hasPathSum(root.right, sum, val)
};
// console.log(hasPathSum(tt, 22));

// @lc code=end

