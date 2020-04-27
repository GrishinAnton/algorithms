/**
 * 1365. How Many Numbers Are Smaller Than the Current Number
 * @namespace LEETCODE
 * @link https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
 */

/**
* @param {number[]} nums
* @return {number[]}
*/
// Сложность по времени O(n * log n) сложность по памяти O(n)
var smallerNumbersThanCurrent = function (nums) {
    let sortedNums = [...nums].sort((a, b) => a - b)
    let buffer = {}
    let lastNumber = null
    let result = []

    for (let i = 0; i < sortedNums.length; i++) {
        if (lastNumber !== sortedNums[i]) {
            buffer[sortedNums[i]] = i
        }
        lastNumber = sortedNums[i]
    }

    for (let j = 0; j < nums.length; j++) {
        result.push(buffer[nums[j]])
    }
    return result
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]))


/**
 Example 1:
Input: nums = [8,1,2,2,3]
Output: [4,0,1,1,3]
Explanation:
For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
For nums[1]=1 does not exist any smaller number than it.
For nums[2]=2 there exist one smaller number than it (1).
For nums[3]=2 there exist one smaller number than it (1).
For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).

Example 2:
Input: nums = [6,5,4,8]
Output: [2,1,0,3]

Example 3:
Input: nums = [7,7,7,7]
Output: [0,0,0,0]
 */