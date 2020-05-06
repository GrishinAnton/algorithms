/**
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
    if (!root) return []
    const result = []
    let count = 0

    const levelOrderBottomRecurs = (root, count) => {
        if (!root) return null
        count = count

        root && levelOrderBottomRecurs(root.left, count + 1)
        root && levelOrderBottomRecurs(root.right, count + 1)

        if (!result[count]) {
            result[count] = []
        }
        result[count].push([root.val])
    }

    levelOrderBottomRecurs(root, count)
    return result.reverse()

};
console.log(levelOrderBottom(tt));

// @lc code=end

