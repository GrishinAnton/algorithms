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
//Сложность O(n)
var levelOrder = function (root) {
    if (!root) return []
    let result = []
    let count = 0
    let q = [[root, count]]
    let buffer = []

    while (q.length > 0) {
        let front = q.shift()
        let currentCount = front[1]

        if (count !== currentCount) {
            result.push([...buffer])
            buffer.length = 0
            count = currentCount
        }

        buffer.push(front[0].val)

        front[0].left && q.push([front[0].left, count + 1])
        front[0].right && q.push([front[0].right, count + 1])
    }
    result.push([...buffer])
    return result
};
console.log(levelOrder(tt));

// @lc code=end

