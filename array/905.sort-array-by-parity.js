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

    let start = 0
    let end = A.length

    while (start < end) {
        if (A[start] % 2 !== 0) {
            [A[start + 1], A[start]] = [A[start], A[start + 1]]
        }
        if (A[end] % 2 === 0) {
            [A[end], A[end - 1]] = [A[end - 1], A[end]]
        }
        start++
        end--
    }

    return A
};
// @lc code=end

