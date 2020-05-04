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
        left: { val: 4, left: null, right: null },
        right: { val: 3, left: null, right: null }
    }
}
//Сложность по времени O(n)
//iteratively
var isSymmetric = function (root) {
    if (!root) {
        return null
    }
    let q = [[root.left, root.right]]
    while (q.length > 0) {
        let [leftBranch, rightBrahch] = q.shift()


        if (leftBranch === null && rightBrahch === null) continue
        if (!leftBranch || !rightBrahch) return false
        if (leftBranch.val !== rightBrahch.val) return false

        q.push([leftBranch.left, rightBrahch.right])
        q.push([rightBrahch.left, leftBranch.right])

    }
    return true
};
console.log(isSymmetric(tt));

//recursively
// var isSymmetric = function (root) {
//     if (!root) {
//         return null
//     }

//     const isEqual = (left, right) => {
//         if (left === null && right === null) return true
//         if (left === null || right === null || left.val !== right.val) return false

//         return isEqual(left.left, right.right) && isEqual(right.left, left.right)
//     }

//     return isEqual(root.left, root.right)
// };
// console.log(isSymmetric(tt));

// @lc code=end

