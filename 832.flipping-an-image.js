/**
 * 832. Flipping an Image
 * @namespace LEETCODE
 * @link https://leetcode.com/problems/flipping-an-image/
 */
/*
 * @lc app=leetcode id=832 lang=javascript
 *
 * [832] Flipping an Image
 */

// @lc code=start
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
//Сложность  O(n * m)
var flipAndInvertImage = function (A) {

    return A.map(item => {
        return item.reverse().map(number => number === 0 ? 1 : 0)
    })

};
console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]))

// @lc code=end

/**
 * Input: [[1,1,0],[1,0,1],[0,0,0]]
    Output: [[1,0,0],[0,1,0],[1,1,1]]
    Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
    Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
 */