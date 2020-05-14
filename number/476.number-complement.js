/**
 * @lc app=leetcode id=476 lang=javascript
 *
 * [476] Number Complement
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */

function tenTotwo(num) {
    let result = []

    while (num > 0) {
        if (num % 2 !== 0) {
            result.push(1)
        } else {
            result.push(0)
        }
        num = Math.floor(num / 2)
    }

    return result.reverse()
}
function twoToTen(arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result += 2 ** i
        }
    }
    return result
}

var findComplement = function (num) {
    let twoArr = tenTotwo(num)

    for (let i = 0; i < twoArr.length; i++) {
        twoArr[i] = twoArr[i] ^ 1
    }

    return twoToTen(twoArr.reverse())

};
// @lc code=end

