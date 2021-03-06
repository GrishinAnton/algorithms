/**
 * @lc app=leetcode id=590 lang=javascript
 *
 * [590] N-ary Tree Postorder Traversal
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    if (!root) return []
    let st = [root]
    let result = []

    while (st.length > 0) {
        let front = st.pop()
        result.push(front.val)

        front.children && st.push(...front.children)

    }
    return result.reverse()
};
// @lc code=end

