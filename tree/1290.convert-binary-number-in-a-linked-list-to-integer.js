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
// var getDecimalValue = function (head) {
//     let summ = 0

//     const getDecimalValueRec = root => {
//         if (!root) return null
//         let tmp = summ * 2 + root.val

//         summ = tmp
//         getDecimalValueRec(root.next)
//     }

//     getDecimalValueRec(head)

//     return summ
// };

//Вариант через возведение в степерь числа
//  0   1   0   1
// 2:3 2:2 2:1 2:0
var getDecimalValue = function (head, height = getHeight(head) - 1) {
    if (!head) return null
    if (head.val !== 1) return getDecimalValue(head.next, height - 1)

    return 2 ** height + getDecimalValue(head.next, height - 1)
};

function getHeight(head) {
    if (!head) return 0

    return 1 + getHeight(head.next)
}



// @lc code=end

