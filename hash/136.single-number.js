/**
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//Сложность по времени O(n)
var singleNumber = function (nums) {
    let result = 0

    for (let i = 0; i < nums.length; i++) {
        result ^= nums[i]
    }

    return result
};
// @lc code=end

