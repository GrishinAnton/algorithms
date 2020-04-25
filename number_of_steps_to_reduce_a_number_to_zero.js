/**
 * 1342. Number of Steps to Reduce a Number to Zero
 * @namespace LEETCODE
 * @link https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero
 */
/**
 * @param {number} num
 * @return {number}
 */
/**
 * Данную задачу можно решить через рекурсию или цикл
 * При рекурсивном вызаве сложность получается O(log n * log n) ?
 * При итеративном варианте сложность O(log n * log n), в этом варианте не используется стек для памяти, как в рекурсивном.
 */
//итеративный вариант
var numberOfSteps = (num) => {
    let summ = 0;
    while (num !== 0) {
        summ += 1
        num = num % 2 === 0 ? num / 2 : num - 1
    }
    return summ
}

//рекурсивный вариант
// var numberOfSteps = function (num, summ = 0) {

//     if (num === 0) {
//         return summ
//     }
//     return num % 2 === 0 ? numberOfSteps(num / 2, summ += 1) : numberOfSteps(num - 1, summ += 1)

// };

console.log(numberOfSteps(8))

/**
 *
 *
 Example 1:
Input: num = 14
Output: 6
Explanation:
Step 1) 14 is even; divide by 2 and obtain 7.
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3.
Step 4) 3 is odd; subtract 1 and obtain 2.
Step 5) 2 is even; divide by 2 and obtain 1.
Step 6) 1 is odd; subtract 1 and obtain 0.

Example 2:
Input: num = 8
Output: 4
Explanation:
Step 1) 8 is even; divide by 2 and obtain 4.
Step 2) 4 is even; divide by 2 and obtain 2.
Step 3) 2 is even; divide by 2 and obtain 1.
Step 4) 1 is odd; subtract 1 and obtain 0.

Example 3:
Input: num = 123
Output: 12
 */