/**
 * 1295. Find Numbers with Even Number of Digits
 * @namespace LEETCODE
 * @link https://leetcode.com/problems/find-numbers-with-even-number-of-digits/
 */

/**
* @param {number[]} nums
* @return {number}
*/
// Сложность задачи O(n)
// Сложность функции O(1)
function numberLength(n){
    let result = []
    let base = 10
    let currentNumber = n

    while(currentNumber > 0){
        let baseNum = Math.floor(currentNumber / base)
        let digit = currentNumber % base
        result.push(digit)
        currentNumber = baseNum
    }
    return result.length
}
//  Сложность функции O(n)
var findNumbers = function (nums) {
    let count = 0

    for(let item in nums){
        if (numberLength(nums[item]) % 2 === 0){
            count ++
        }
    }
    return count
};

console.log(findNumbers([555, 901, 482, 1771]))


 /**
  * 
  Example 1:

    Input: nums = [12,345,2,6,7896]
    Output: 2
    Explanation:
    12 contains 2 digits (even number of digits).
    345 contains 3 digits (odd number of digits).
    2 contains 1 digit (odd number of digits).
    6 contains 1 digit (odd number of digits).
    7896 contains 4 digits (even number of digits).
    Therefore only 12 and 7896 contain an even number of digits.
    
    Example 2:
    Input: nums = [555,901,482,1771]
    Output: 1
    Explanation:
    Only 1771 contains an even number of digits.
  */