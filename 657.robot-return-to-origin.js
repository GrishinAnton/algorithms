/*
 * @lc app=leetcode id=657 lang=javascript
 *
 * [657] Robot Return to Origin
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
//Сложность  O(n)
var judgeCircle = function (moves) {
    let vertical = 0
    let horizontal = 0

    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'L') horizontal += -1
        if (moves[i] === 'R') horizontal += 1
        if (moves[i] === 'U') vertical += -1
        if (moves[i] === 'D') vertical += 1
    }

    return vertical === 0 && horizontal === 0
};
// @lc code=end

