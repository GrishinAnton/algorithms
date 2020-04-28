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

function bfs(root) {
    const q = [root];
    const result = [];
    const fakeNode = {
        val: null,
        left: null,
        right: null
    }

    while (q.length > 0) {
        const front = q.shift();
        result.push(front.val);
        if (front.left === null && front.right === null) {
            continue
        }
        if (front.left === null && front.right !== null) {
            q.push(fakeNode)
            q.push(front.right);
            continue
        }

        q.push(front.left);
        front.right && q.push(front.right);
    }
    return result
}

var mergeTrees = function (t1, t2) {
    let result = []

    let maxArrLength = []
    let minArrLength = []

    if (t1.length >= t2.length) {
        maxArrLength = bfs(t1)
        minArrLength = bfs(t2)
    } else {
        maxArrLength = bfs(t2)
        minArrLength = bfs(t1)
    }

    for (let i = 0; i < maxArrLength.length; i++) {
        result.push(summNode(maxArrLength[i], minArrLength[i]))
    }

    return result
};
// console.log(mergeTrees([1, 3, 2, 5], [2, 1, 3, null, 4, null, 7]), 'erturn')
// [3,4,5,5,4,null,7]
// @lc code=end

