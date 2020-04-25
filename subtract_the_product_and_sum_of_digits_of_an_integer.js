/**
 * 1281. Subtract the Product and Sum of Digits of an Integer
 * @namespace LEETCODE
 * @link https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero
 */
/**
 * @param {number} n
 * @return {number}
 */
// Слжность О(n)
var subtractProductAndSum = function (n) {
    let summ = 0
    let multi = 1
    let bufferStr = n + ''

    for (let a in bufferStr) {
        summ += +bufferStr[a]
        multi *= bufferStr[a]
    }
    return multi - summ
};

console.log(subtractProductAndSum(4421))

/**
 Example 1:

Input: n = 234
Output: 15
Explanation:
Product of digits = 2 * 3 * 4 = 24
Sum of digits = 2 + 3 + 4 = 9
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation:
Product of digits = 4 * 4 * 2 * 1 = 32
Sum of digits = 4 + 4 + 2 + 1 = 11
Result = 32 - 11 = 21
 */