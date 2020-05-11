/*
 * @lc app=leetcode id=1323 lang=javascript
 *
 * [1323] Maximum 69 Number
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let str = num + ''
    return +str.replace(/6/, '9')
};
// @lc code=end

