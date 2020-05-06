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

    while (end > 1) {
        let buffer = s[left]
        s[left] = s[end]
        s[end] = buffer
        left++
        end--
    }
    return s
};
console.log(reverseString(["h", "e", "l", "l", "o"]));

// @lc code=end

