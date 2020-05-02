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
var preorder = function (root) {
    if (!root) return null

    let result = []
    result.push(root.val)
    let childrens = root.children

    for (let i = 0; i < childrens.length; i++) {
        let q = [childrens[i]]
        console.log(q, 'q');


        while (q.length > 0) {
            let front = q.shift()
            console.log(front, 'front');

            result.push(front.val)
            front.children && q.push(...front.children)
        }
    }

    return result

};
// @lc code=end

