/**
 * @lc app=leetcode id=961 lang=javascript
 *
 * [961] N-Repeated Element in Size 2N Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function (A) {

    let hashmaps = []

    for (let i = 0; i < A.length; i++) {
        hashmaps[A[i]] = (hashmaps[A[i]] || 0) + 1
    }

    for (let k = 0; k < hashmaps.length; k++) {
        if (A.length / 2 === hashmaps[k]) {
            return k
        }
    }
};
// @lc code=end

