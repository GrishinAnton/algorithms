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

        left: { val: 3, left: { val: 1, left: null, right: null }, right: null },

        right: { val: 7, left: { val: 6, left: null, right: null }, right: null }
    },

    right:

    {

        val: 15,

        left: { val: 13, left: null, right: null },

        right: { val: 18, left: null, right: null }
    }
}
var rangeSumBST = function (root, L, R, ) {
    // debugger
    // console.log(root)

    if (root === null) {
        return 0
    }


    rangeSumBST(root.left, L, R)
    rangeSumBST(root.right, L, R)

    var z = 0
    if (root.val > L && root.val < R) {

        z = root.val
    }

    return R + L + z
};

console.log(rangeSumBST(tt, 6, 10));//23


// @lc code=end

