/**
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
/**
 * 2= 1+0 = 1
 * 3= 1+1 =2
 * 4= 1+1 =2, 2+1=3
 * 5= 1+1 =2, 2+1=3, 3+2 =5
 * 6= 1+1 =2, 2+1=3, 3+2 =5, 5+8=13
 * 7= 1+1 =2, 2+1=3, 3+2 =5, 5+8=13, 13+8=21
 * 8= 1+1 =2, 2+1=3, 3+2 =5, 5+8=13, 13+8=21, 21+13=34
 */
//Итеративно
var fib = function (N) {
    if (N === 0) return 0
    let count = 1
    let result = 1

    for (let i = 3; i <= N; i++) {
        let summ = count + result
        count = result
        result = summ

    }
    return result
}
//Рекурсивно
// var fib = function (N) {
//     if (N === 0) return 0
//     return N > 2 ? fib(N - 1) + fib(N - 2) : 1
// };

// @lc code=end

