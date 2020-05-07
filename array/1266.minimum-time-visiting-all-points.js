/*
 * @lc app=leetcode id=1266 lang=javascript
 *
 * [1266] Minimum Time Visiting All Points
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
//Сложность O(n) 
var minTimeToVisitAllPoints = function (points) {
    let timeResult = 0
    let startPoints = points[0]

    for (let i = 1; i < points.length; i++) {
        let [x, y] = points[i]
        timeResult += Math.max(Math.abs(x - startPoints[0]), Math.abs(y - startPoints[1]))
        startPoints = points[i]
    }

    return timeResult

};
// @lc code=end

