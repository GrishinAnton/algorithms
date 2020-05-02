/**
 * @lc app=leetcode id=589 lang=javascript
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
//Сложность O(n * m)
var preorder = function (root) {
    if (!root) return []
    let q = [root]
    let result = []

    while (q.length > 0) {
        let front = q.shift()

        result.push(front.val)
        front.children && q.unshift(...front.children)
    }
    return result
};
// @lc code=end

