/*
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
var hasPathSum = function (root, sum) {
    console.log(sum, 'sssss');

    if (!root) return []
    let summ = root.val
    let flag = false

    const summRec = (root) => {
        if (!root.left && !root.right) {
            if ((summ + root.val) === sum) {
                flag = true
            }
            return null
        }
        summ += root.val

        root.left && summRec(root.left)
        root.right && summRec(root.right)
    }
    root.left && summRec(root.left)
    summ = root.val
    root.right && summRec(root.right)

    return flag
};
// @lc code=end

