/**
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
//Сложность O(n * m)
function reverse(word, start, end) {
    while (start < end) {
        [word[end], word[start]] = [word[start], word[end]]
        start++
        end--
    }
}
var reverseWords = function (s) {

    let sArr = s.split('')
    let start = 0
    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] === ' ') {
            reverse(sArr, start, i - 1)
            start = i + 1
        }

    }
    reverse(sArr, start, sArr.length - 1)

    return sArr.join("")
};
// @lc code=end

