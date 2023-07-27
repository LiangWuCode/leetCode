/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let listNode1 = []
    let listNode2 = []
    let l1length = l1.length
    let l2length = l2.length
    if (l1length === l2length) {
        listNode1 = l1
        listNode2 = l2
    } else if (l1length < l2length) {
        let stock = []
        for (let index = 0; index < l2length - l1length; index++) {
            stock.push(0)
        }
        listNode1 = l1.concat(stock)
        listNode2 = l2
    } else {
        for (let index = 0; index < l1length - l2length; index++) {
            stock.push(0)
        }
        listNode1 = l1
        listNode2 = l2.concat(stock)
    }
    let finalNodeList = []
    let carry = 0;
    for (let index = 0; index < listNode1.length; index++) {
        const l1Item = listNode1[index];
        const l2Item = listNode2[index]
        const l3Item = l1Item + l2Item + carry
        if (l3Item > 9) {
            carry = 1
            finalNodeList.push(l3Item % 10)
        } else {
            finalNodeList.push(l3Item)
            carry = 0
        }
    }

    return finalNodeList
};


addTwoNumbers([2, 4, 3], [5, 6, 4])
// @lc code=end

