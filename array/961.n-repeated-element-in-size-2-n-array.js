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

    let buffer = []
    let maxNumber = 0
    let indexMaxNumber = 0

    for (let i = 0; i < A.length; i++) {
        buffer[A[i]] = (buffer[A[i]] || 0) + 1
    }
    console.log(buffer);
    for (let k = 0; k < buffer.length; k++) {
        if (buffer[k]) {
            if (maxNumber < buffer[k]) {
                maxNumber = buffer[k]
                indexMaxNumber = k
            }
        }
    }
    return indexMaxNumber
};
// @lc code=end

