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
//Сложность O(n)
var sortArrayByParity = function (A) {
    if (A.length <= 1) return A
    let start = 0
    let end = A.length - 1

    while (start < end) {
        while (A[start] % 2 === 0 && start < end) {
            start++
        }
        while (A[end] % 2 !== 0 && start < end) {
            end--
        }

        [A[end], A[start]] = [A[start], A[end]]
        start++
        end--
    }

    return A
};
// @lc code=end

