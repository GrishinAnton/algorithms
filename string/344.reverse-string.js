/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
//Сложность O(n)
var reverseString = function (s) {
    let left = 0
    let end = s.length - 1

    while (left < end) {
        [s[end], s[left]] = [s[left], s[end]]
        left++
        end--
    }
    return s
};
// @lc code=end

