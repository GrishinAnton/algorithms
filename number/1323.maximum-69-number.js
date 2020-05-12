/*
 * @lc app=leetcode id=1323 lang=javascript
 *
 * [1323] Maximum 69 Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
//Сложность О(n) по помаяти O(n)
function numberTransform(number) {
    let base = 10
    let current = number
    let result = []

    while (current > 0) {
        let baseNum = Math.floor(current / base)
        result.push(current % base)
        current = baseNum
    }

    return result.reverse()
}
var maximum69Number = function (num) {
    let numArr = numberTransform(num)
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] === 6) {
            numArr[i] = 9
            break
        }
    }
    return numArr.join('')
};
// @lc code=end

