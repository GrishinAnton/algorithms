/**
 * 1313. Decompress Run-Length Encoded List
 * @namespace LEETCODE
 * @link https://leetcode.com/problems/decompress-run-length-encoded-list/
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {
    let result = []

    for (let i = 0; i < nums.length; i += 2) {
        result.push(...new Array(nums[i]).fill(nums[i + 1]))
    }
    return result
};


console.log(decompressRLElist([1, 1, 2, 3]))

/**
 Example 1:

Input: nums = [1,2,3,4]
Output: [2,4,4,4]
Explanation: The first pair [1,2] means we have freq = 1 and val = 2 so we generate the array [2].
The second pair [3,4] means we have freq = 3 and val = 4 so we generate [4,4,4].
At the end the concatenation [2] + [4,4,4] is [2,4,4,4].
Example 2:

Input: nums = [1,1,2,3]
Output: [1,3,3]


Constraints:

2 <= nums.length <= 100
nums.length % 2 == 0
1 <= nums[i] <= 100
 */