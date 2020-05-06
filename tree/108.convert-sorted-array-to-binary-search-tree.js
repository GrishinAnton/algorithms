/**
 * @lc app=leetcode id=108 lang=javascript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}
//Сложность O(n) по памяти O(n)
var sortedArrayToBST = function (nums) {
    if (!nums.length) return null
    let mid = Math.floor(nums.length / 2)

    let root = new TreeNode(nums[mid])

    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice((mid + 1)))

    return root

};
// console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));

// @lc code=end

