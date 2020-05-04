/**
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
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
 * @return {number}
 */
let tt = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right:
  {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null }
  }
}
//Обход в глубину
var maxDepth = function (root) {
  if (!root) return 0

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));

};
// console.log(maxDepth(tt));
//Сложность O(n)
// Обход в ширину
// var maxDepth = function (root) {
//     if (!root) return 0

//     let level = 1
//     let q = [[root, level]]


//     while (q.length > 0) {
//         let node = q.shift()
//         level = node[1]


//         node[0].left && q.push([node[0].left, level + 1])
//         node[0].right && q.push([node[0].right, level + 1])

//     }
//     return level

// };
// console.log(maxDepth(tt));

// @lc code=end


/**
 *  3
   / \
  9  20
    /  \
   15   7
 * Given binary tree [3,9,20,null,null,15,7] - 3
 */

