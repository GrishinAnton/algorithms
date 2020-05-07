/**
 * @lc app=leetcode id=700 lang=javascript
 *
 * [700] Search in a Binary Search Tree
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
 * @param {number} val
 * @return {TreeNode}
 */
//Сложность О(n)
var searchBST = function (root, val) {
    if (!root) return []
    if (root.val === val) return root
    let result = null

    const searchBSTRec = root => {
        if (!root) return null

        if (root.val === val) result = root

        root.left && searchBSTRec(root.left)
        root.right && searchBSTRec(root.right)

    }

    searchBSTRec(root.left)
    searchBSTRec(root.right)

    return result
};
// @lc code=end

