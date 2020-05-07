/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
//Сложность O(n) по памяти O(n)
var sortArrayByParity = function (A) {
    let even = []
    let odd = []

    A.map(item => {
        if (item % 2 > 0) {
            odd.push(item)
        } else {
            even.push(item)
        }
    })

    return [...even, ...odd]
};
// @lc code=end

