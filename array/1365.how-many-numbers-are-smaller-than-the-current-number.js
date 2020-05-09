/**
 * @lc app=leetcode id=1365 lang=javascript
 *
 * [1365] How Many Numbers Are Smaller Than the Current Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Сложность по времени O(n * log n) сложность по памяти O(n)

// var smallerNumbersThanCurrent = function (nums) {
//     let sortedNums = [...nums].sort((a, b) => a - b)
//     let buffer = {}
//     let lastNumber = null
//     let result = []

//     for (let i = 0; i < sortedNums.length; i++) {
//         if (lastNumber !== sortedNums[i]) {
//             buffer[sortedNums[i]] = i
//         }
//         lastNumber = sortedNums[i]
//     }

//     for (let j = 0; j < nums.length; j++) {
//         result.push(buffer[nums[j]])
//     }
//     return result
// };

var smallerNumbersThanCurrent = function (nums) {
    let cnt = new Array(101).fill(0)
    let result = []


    for (let j = 0; j < nums.length; j++) {
        cnt[nums[j] + 1]++;
    }
    for (let i = 1; i <= 101; i++) {
        cnt[i] = cnt[i] + cnt[i - 1]
    }
    for (let k = 0; k < nums.length; k++) {
        result.push(cnt[nums[k]]);
    }


    return result
};
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))


// @lc code=end

