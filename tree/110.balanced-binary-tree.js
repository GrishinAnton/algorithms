/**
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
let tt = {
    val: 3,
    left: {
        val: 9,
        left: { val: 15, left: { val: 15, left: { val: 15, left: null, right: null }, right: { val: 15, left: null, right: null } }, right: null }, right: null
    },
    right: {
        val: 20,
        left: null,
        right: null
    }
}
// Рекурсивно
var isBalanced = function (root) {
    // debugger
    if (!root) return true
    let leftLevel = 0
    let leftLevel = 0
    let rightLevel = 0
    let rightLevel = 0

    const levelDetect = (root, levelLeft, levelRight) => {
        if (!root) return null

        leftLevel = levelLeft
        rightLevel = levelRight

        root.left && levelDetect(root.left, leftLevel + 1, rightLevel)
        root.right && levelDetect(root.right, leftLevel, rightLevel + 1)
    }

    levelDetect(root.left, leftLevel + 1, rightLevel + 1)
    if (Math.max(leftLevel, rightLevel) - Math.min(leftLevel, rightLevel) > 1) return false
    leftLevel = 0
    rightLevel = 0

    levelDetect(root.right, leftLevel + 1, rightLevel + 1)
    if (Math.max(leftLevel, rightLevel) - Math.min(leftLevel, rightLevel) > 1) return false


    return true
};

console.log(isBalanced(tt));

// @lc code=end

