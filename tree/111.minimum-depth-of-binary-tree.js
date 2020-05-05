/**
 * @lc app=leetcode id=111 lang=javascript
 *
 * [111] Minimum Depth of Binary Tree
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
let tt = {
    val: 3,
    left: { val: 9, left: { val: 15, left: null, right: null }, right: { val: 15, left: null, right: null } },
    right:
    {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
}

//Рекурсивный метод Сложность O(n) по памяти O(n)
var minDepth = function (root) {
    // debugger

    if (!root) return []
    let level = 0
    let minLevel = 0

    const minDepthRec = (left, right, level) => {
        if (!left && !right) {
            minLevel = Math.min(level, minLevel ? minLevel : level)
            return null
        }
        level = level

        left && minDepthRec(left.left, left.right, level + 1)
        right && minDepthRec(right.left, right.right, level + 1)
    }

    minDepthRec(root.left, root.right, level + 1)
    return minLevel

};
// console.log(minDepth(tt));

// @lc code=end

