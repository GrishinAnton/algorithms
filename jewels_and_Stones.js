/**
 * 771. Jewels and Stones
 * @namespace LEETCODE
 * @link https://leetcode.com/problems/jewels-and-stones/
 */

/**
    Input: J = "aA", S = "aAAbbbb"
    Output: 3
    Input: J = "z", S = "ZZ"
    Output: 0
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
//Решение с одним циклом и хеш-таблицей. Сложность O(N * log N)
var numJewelsInStones = function (J, S) {
    let result = 0
    let buffer = {}

    for (let letterJ in J) {
        buffer[J[letterJ]] = true
    }

    for (let letterS in S) {
        if (buffer[S[letterS]]) {
            result += 1
        }
    }
    return result
};

/** Решение цикл в цикле - сложность N^2 */
// var numJewelsInStones = function (J, S) {
//     let result = 0
//     for (let letterJ in J) {
//         for (let letterS in S) {
//             if (J[letterJ] === S[letterS]) result++
//         }
//     }
//     return result
// };

console.log(numJewelsInStones("aA", "aAAbbbb"))
