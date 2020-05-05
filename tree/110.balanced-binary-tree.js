/**
 * @lc app=leetcode id=110 lang=javascript
 *
 * [110] Balanced Binary Tree
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
 * @return {boolean}
 */
let tt = {
    val: 3,
    left: null,
    right: {
        val: 20,
        left: null,
        right: { val: 15, left: null, right: null }
    }
}
//Итеративно
var isBalanced = root => {

    if (!root) return true
    let levelStart = 0
    let level = 1
    let st = [[root, level]]

    while (st.length > 0) {
        let [front, currentLevel] = st.shift()
        level = currentLevel

        if ((!front.left || !front.right) && !levelStart) {
            levelStart = level
        }

        if (level > (levelStart + 1)) return false

        front.left && st.push([front.left, level + 1])
        front.right && st.push([front.right, level + 1])

    }

    return true
}
console.log(isBalanced(tt));

// @lc code=end

