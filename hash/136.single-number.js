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
    let lastXOR = null

    for (let i = 0; i < nums.length; i++) {
        if (lastXOR !== null) {
            lastXOR ^= nums[i]
        } else {
            lastXOR = nums[i]
        }
    }

    return lastXOR
};
// @lc code=end

