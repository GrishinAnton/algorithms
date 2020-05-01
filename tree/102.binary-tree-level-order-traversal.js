/**
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
    left: { val: 9, left: null, right: null },
    right:
    {
        val: 20,
        left: { val: 15, left: null, right: null },
        right: { val: 7, left: null, right: null }
    }
}
// [1,2,null,3,null,4,null,5]
var levelOrder = function (root) {
    if (!root) return []
    let result = []
    let count = 0
    let q = [root]
    let buffer = []

    while (q.length > 0) {
        count++
        let front = q.shift()

        if (count % 2 === 0) {
            result.push([...buffer])
            buffer.length = 0
        }

        buffer.push(front.val)

        front.left && q.push(front.left)
        front.right && q.push(front.right)
    }
    result.push([...buffer])

    return result
};
console.log(levelOrder(tt));

// @lc code=end

