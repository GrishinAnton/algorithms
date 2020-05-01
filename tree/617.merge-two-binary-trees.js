/**
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
//где n это ноды, а m это ребра.
// let ss = {
//     val: 1,
//     left: {
//         val: 3,
//         left: {
//             val: 5,
//             left: null,
//             right: null
//         },
//         right: null
//     },
//     right: { val: 2, left: null, right: null }
// }

// let zz = {
//     val: 2,
//     left: {
//         val: 1,
//         left: null,
//         right: {
//             val: 4,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         val: 3,
//         left: null,
//         right: { val: 7, left: null, right: null }
//     }
// }
var mergeTrees = function (t1, t2) {
    if (t1 == null) return t2;
    if (t2 == null) return t1;

    t1.val += t2.val;
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    return t1;
};
// console.log(mergeTrees(ss, zz))

// @lc code=end
