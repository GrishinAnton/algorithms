/**
 * 1281. Subtract the Product and Sum of Digits of an Integer
 * @namespace LEETCODE
 * @link https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer
 */
/**
 * @param {number} n
 * @return {number}
 */
// Сложность О(n^2)
function numberTransform(n) {
    let result = []
    let base = 10
    let currentNumber = Math.abs(n)

    while (currentNumber > 0) {
        let baseNum = Math.floor(currentNumber / base)
        let diff = currentNumber - baseNum * base
        result.push(diff)
        currentNumber = baseNum
    }

    return result.reverse()
}

var subtractProductAndSum = function (n) {
    let summ = 0
    let multi = 1
    let bufferArrNumber = numberTransform(n)

    for (let a in bufferArrNumber) {
        summ += +bufferArrNumber[a]
        multi *= bufferArrNumber[a]
    }
    return multi - summ
};

console.log(subtractProductAndSum(234))

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