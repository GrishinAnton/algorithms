/**
 * @lc app=leetcode id=1252 lang=javascript
 *
 * [1252] Cells with Odd Values in a Matrix
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} indices
 * @return {number}
 */
// //Сложность  О(n * m)
// var oddCells = function (n, m, indices) {

//     let matrix = []
//     let result = 0

//     for (let i = 0; i < n; i++) {
//         matrix.push(new Array(m).fill(0))
//     }

//     for (let j = 0; j < indices.length; j++) {
//         let [row, cell] = indices[j]

//         matrix[row].forEach((item, index) => matrix[row][index]++)
//         matrix.forEach(item => {
//             item[cell]++
//         })



//     }
//     matrix.forEach(item => {
//         item.forEach(number => {
//             if (number % 2 !== 0) {
//                 result++
//             }
//         })
//     })

//     return result

// };
//O(k + n * m) и O(n + m)
var oddCells = function (n, m, indices) {

    let result = 0
    let row = new Array(n).fill(0)
    let cols = new Array(m).fill(0)

    for (let i = 0; i < indices.length; i++) {
        let [r, c] = indices[i]
        row[r]++
        cols[c]++
    }

    row.forEach(rowNumber => {
        cols.forEach(colsNumber => {
            if ((colsNumber + rowNumber) % 2 !== 0) {
                result++
            }
        })
    })


    return result

};
// @lc code=end

