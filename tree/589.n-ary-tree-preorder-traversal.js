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
    const st = [root]
    const result = []

    while (st.length > 0) {
        const front = st.pop()

        result.push(front.val)
        front.children && st.push(...front.children.reverse())
    }
    return result
};
// @lc code=end

