/**
 * 938. Range Sum of BST
 * @namespace LEETCODE
 * @link https://leetcode.com/problems/range-sum-of-bst
 */
/*
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
    left:
    {

        val: 5,

        left: { val: 3, left: null, right: null },

        right: { val: 7, left: null, right: null }
    },
    right:
    {
        val: 15,
        left: null,
        right: { val: 18, left: null, right: null }
    }
}
var rangeSumBST = function (root, L, R, summ = { summ: 0 }) {
    // debugger
    // console.log(summ) 
    if (root === null) {
        return null
    }
    if (root.val >= L && root.val <= R) {
        summ.summ = summ.summ + root.val
    }

    rangeSumBST(root.left, L, R, summ)
    rangeSumBST(root.right, L, R, summ)

    return Object.values(summ)[0]
};

console.log(rangeSumBST(tt, 7, 15));


// @lc code=end

