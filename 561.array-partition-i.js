/**
 * 561. Array Partition I
 * @namespace LEETCODE
 * @link https://leetcode.com/problems/array-partition-i/submissions/
 */
/*
 * @lc app=leetcode id=561 lang=javascript
 *
 * [561] Array Partition I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//Сложность O(n)
var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b)
    let result = 0

    for (let i = 0; i < nums.length; i += 2) {
        result += nums[i]
    }
    return result

};
/**

[
1,2,3,4,5,6,4,4,4,4
]
          1
         (1)
          1
         (1)
(1),1,(1),1,(1),1

100001 - 10000 = 1
100003 - 10000 = 3
100004 - 10000 = 4
100004 - 10000 = 4
100005 - 10000 = 5
               = 17
var arrayPairSum = function (nums) {
    debugger
    let exist = []
    for (let i = 0; i < nums.length; i++) {
        exist[nums[i] + 10] = (exist[nums[i] + 10] || 0) + 1
    }

    let odd = true // flag to control add or not
    let sum = 0
    for (let i = 0; i < exist.length; i++) {
        while (exist[i]) {
            if (odd) {
                sum += i - 10
            }
            odd = !odd
            exist[i]-- // after met, -1
        }
    }
    return sum

};
*/
// @lc code=end

/**
 * Input: [1,4,3,2]

Output: 4
Explanation: n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).
 */