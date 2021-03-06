/**
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
let tt = {
    val: 10,
    left: {
        val: 5,
        left: { val: 3, left: { val: 1, left: null, right: null }, right: null },
        right: { val: 7, left: { val: 6, left: { val: 5, left: null, right: null }, right: null }, right: null }
    },
    right: {
        val: 15,
        left: { val: 13, left: null, right: null },
        right: { val: 18, left: null, right: null }
    }
}

/**
 * Сложность O(n) где n кол-во нод
 */
var rangeSumBST = function (root, L, R, ) {
    debugger
    let result = 0

    if (root === null) return 0
    if (root.val >= L && root.val <= R) {
        result += root.val

    }
    if (root.val > L && root.left !== null) {
        result += rangeSumBST(root.left, L, R)
    }
    if (root.val < R && root.right !== null) {
        result += rangeSumBST(root.right, L, R)
    }

    return result
};
console.log(rangeSumBST(tt, 6, 10));//23
// @lc code=end

