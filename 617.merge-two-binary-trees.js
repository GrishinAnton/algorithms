/**
 * 617. Merge Two Binary Trees
 * @namespace LEETCODE
 * @link https://leetcode.com/problems/merge-two-binary-trees
 */
/*
 * @lc app=leetcode id=617 lang=javascript
 *
 * [617] Merge Two Binary Trees
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
//Сложность O(n)
function summNode(first, second) {
    if (second === undefined) return first

    if (first === null && second === null) return null

    if (first !== null && second !== null) return first + second

    return first === null ? second : first
}
var mergeTrees = function (t1, t2) {
    let result = []
    let maxArrLength = []
    let minArrLength = []

    if (t1.lenght >= t2.length) {
        maxArrLength = t1
        minArrLength = t2
    } else {
        maxArrLength = t2
        minArrLength = t1
    }

    for (let i = 0; i < maxArrLength.length; i++) {
        result.push(summNode(maxArrLength[i], minArrLength[i]))
    }
    return result
};
// console.log(mergeTrees([1, 3, 2, 5], [2, 1, 3, null, 4, null, 7]), 'erturn')
// [3,4,5,5,4,null,7]
// @lc code=end

