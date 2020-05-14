/**
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
    if (A.length === 1) return [Math.abs(A[0])]
    let result = []
    let minNumber = -10001
    let minIndexArr = null


    for (let i = 0; i < A.length; i++) {
        if (Math.min(Math.abs(A[i]), Math.abs(minNumber)) === A[i]) {
            minNumber = A[i]
            minIndexArr = i
        }

        A[i] = Math.abs(A[i]) ** 2
    }

    console.log(minIndexArr);


    let min = minIndexArr - 1
    let max = minIndexArr + 1
    result.push(A[minIndexArr])

    while (true) {

        let dec = A[min] || -1
        let inc = A[max] || 10001

        min >= 0 && result.push(Math.min(dec, inc))
        max <= A.length - 1 && result.push(Math.max(dec, inc))

        if (min <= 0 && max >= A.length - 1) break

        min--
        max++
    }

    return result
};
// var sortedSquares = function (A) {
//     let hashmap = []
//     let result = []
//     for (let i = 0; i < A.length; i++) {
//         hashmap[Math.abs(A[i])] = (hashmap[Math.abs(A[i])] || 0) + 1
//     }

//     for (let k = 0; k < hashmap.length; k++) {
//         if (hashmap[k]) {

//             let element = hashmap[k]
//             while (element) {
//                 result.push(k ** 2)

//                 element--
//             }
//         }
//     }
//     return result
// };
// @lc code=end

