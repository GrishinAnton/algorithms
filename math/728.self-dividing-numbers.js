/*
 * @lc app=leetcode id=728 lang=javascript
 *
 * [728] Self Dividing Numbers
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
//Сложность по времени O(n * m * t) - где n это fn self, m - fn dividing, t - fn number

function numberTransfrorm(number) {
    let base = 10
    let result = []
    let currentNumber = number

    while (currentNumber > 0) {
        result.push(currentNumber % base)
        currentNumber = Math.floor(currentNumber / base)
    }
    return result.reverse()
}

function selfDividing(number) {
    let numberTransformToArr = numberTransfrorm(number)

    if (numberTransformToArr.some(number => number === 0)) return null
    for (let i = 0; i < numberTransformToArr.length; i++) {
        if (number % numberTransformToArr[i] !== 0) {
            return false
        }
    }
    return true
}
var selfDividingNumbers = function (left, right) {
    let result = []

    for (let i = left; i <= right; i++) {
        if (selfDividing(i)) result.push(i)
    }
    return result
};
// @lc code=end

