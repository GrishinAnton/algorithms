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
var singleNumber = function (nums) {
    let buffer = []

    for (let i = 0; i < nums.length; i++) {
        buffer[nums[i]] = (buffer[nums[i]] || 0) + 1
    }

    for (let j = 0; j < buffer.length; j++) {
        if (buffer[j] === 1) return j
    }

};
// @lc code=end

