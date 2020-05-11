/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    let hashmap = []
    let result = []
    for (let i = 0; i < A.length; i++) {
        hashmap[Math.abs(A[i])] = (hashmap[Math.abs(A[i])] || 0) + 1
    }

    for (let k = 0; k < hashmap.length; k++) {
        if (hashmap[k]) {

            let element = hashmap[k]
            while (element) {
                result.push(k ** 2)

                element--
            }
        }
    }
    return result
};
// @lc code=end

