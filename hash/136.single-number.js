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
//Сложность по времени O(n) сложность по памяти O(n)
var singleNumber = function (nums) {
    let hash = {}

    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = (hash[nums[i]] || 0) + 1
    }

    for (let item in hash) {
        if (hash[item] === 1) return item
    }

};
// @lc code=end

