/*
 * @lc app=leetcode id=804 lang=javascript
 *
 * [804] Unique Morse Code Words
 */
/**
 * 804. Unique Morse Code Words
 * @namespace LEETCODE
 * @link https://leetcode.com/problems/unique-morse-code-words
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
//Сложность алгоритма O(2n^2) Сложность по помяти O(n)
var uniqueMorseRepresentations = function (words) {
    const dic = {
        'a': '.-',
        'b': '-...',
        'w': '.--',
        'g': '--.',
        'd': '-..',
        'e': '.',
        'v': '...-',
        'z': '--..',
        'i': '..',
        'j': '.---',
        'k': '-.-',
        'l': '.-..',
        'm': '--',
        'n': '-.',
        'o': '---',
        'p': '.--.',
        'r': '.-.',
        's': '...',
        't': '-',
        'u': '..-',
        'f': '..-.',
        'h': '....',
        'c': '-.-.',
        'q': '--.-',
        'y': '-.--',
        'x': '-..-'
    };
    const result = new Set()

    for (let i = 0; i < words.length; i++) {
        let bufferStr = ''
        for (let j = 0; j < words[i].length; j++) {
            bufferStr += dic[words[i][j]]
        }
        result.add(bufferStr)
    }
    return result.size

}
// @lc code=end

/**
 * Example:
Input: words =
Output: 2
Explanation:
The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."

There are 2 different transformations, "--...-." and "--...--.".
 */

