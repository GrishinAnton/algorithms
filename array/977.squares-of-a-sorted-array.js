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
function findIndexOfMin(arr) {
    let minNumber = -10001
    let minIndex = null

    for (let i = 0; i < arr.length; i++) {
        if (Math.min(Math.abs(arr[i]), Math.abs(minNumber)) === Math.abs(arr[i])) {
            minNumber = arr[i]
            minIndex = i
        }
    }

    return minIndex
}
var sortedSquares = function (A) {
    if (A.length === 1) return [Math.abs(A[0])]

    let result = []
    const minIndex = findIndexOfMin(A)

    let min = minIndex - 1
    let max = minIndex + 1


    while (min > 0 || max < A.length - 1) {


    }

    return result
};

// @lc code=end

