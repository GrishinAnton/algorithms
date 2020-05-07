/**
 * @lc app=leetcode id=1290 lang=javascript
 *
 * [1290] Convert Binary Number in a Linked List to Integer
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
//Сложность O(n) по поамяти O(n)
// 0 x 2 + i = symm
// summ X 2 + i = summ
var getDecimalValue = function (head) {
    let summ = 0

    if (!root) return null


    return summ * (2 + getDecimalValueRec(head.next))
};
// @lc code=end

