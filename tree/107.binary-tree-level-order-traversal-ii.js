/*
 * @lc app=leetcode id=107 lang=javascript
 *
 * [107] Binary Tree Level Order Traversal II
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
 * @return {number[][]}
 */
let tt = {
    val: 3,
    left: {
        val: 9,
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
}
let zz = {
    val: 1,
    left: { val: 2, left: null, right: null },
    right: null
}
//Рекурсия
var levelOrderBottom = function (root) {
    debugger

    if (!root) return []
    const result = []

    const levelOrderBottomRecurs = (left, right) => {
        if (!left && !right) return null

        levelOrderBottomRecurs(left.left, left.right)
        levelOrderBottomRecurs(right.left, right.right)
        result.push([left.val, right.val])
    }

    levelOrderBottomRecurs(root.left, root.right)
    result.push([root.val])
    return result

};
console.log(levelOrderBottom(zz));

// @lc code=end

