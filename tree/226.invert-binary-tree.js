/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = val || 0
    this.left = left || null
    this.right = right || null
}
var invertTree = function (root) {
    if (!root) return null
    let treeNode = new TreeNode(root.val)

    treeNode.left = invertTree(root.right)
    treeNode.right = invertTree(root.left)


    return treeNode

};
// @lc code=end

