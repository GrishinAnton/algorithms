/*
 * @lc app=leetcode id=559 lang=javascript
 *
 * [559] Maximum Depth of N-ary Tree
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
 * @return {number}
 */
//Сложность О(n)
//Итеративный bfs через очередь
var maxDepth = function (root) {
    if (!root) return 0
    let level = 1
    let q = [[root, level]]

    while (q.length > 0) {
        let [front, lvl] = q.shift()
        level = lvl
        front.children && front.children.forEach(item => q.push([item, level + 1]))
    }
    return level
};
// @lc code=end

