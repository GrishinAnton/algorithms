/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = val || 0
    this.next = next || null
}

// function getHeight

// var reverseList = function (head) {
//     if (!head) return null
//     let valBuffer = [head.val]


//     const reverseRec = next => {
//         if (!next) return null
//         valBuffer.push(next.val)
//         reverseRec(next.next)
//     }

//     const generateList = () => {
//         if (!valBuffer.length) return null

//         const element = valBuffer.pop()
//         let root = {}
//         root = new ListNode(element)
//         root.next = generateList()

//         return root

//     }

//     reverseRec(head.next)

//     return generateList()
// };
var reverseList = function (head) {
    let prev = null
    let next = null
    let current = head

    while (current) {
        next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}
// @lc code=end

