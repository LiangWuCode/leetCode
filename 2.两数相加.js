/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *  this.val = (val === undefined ? 0 : val)
 *  this.next = (next === undefined ? null : next)
 *   }
 */


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    // 创建哑结点
    let dummy = new ListNode();
    // 进位
    let carry = 0
    let l3 = dummy
    while (l1 || l2) {
        // 当l1为null时赋值为0
        const n1 = l1 ? l1.val : 0
        const n2 = l2 ? l2.val : 0
        // 计算和
        let p3Data = n1 + n2 + carry
        l3.next = new ListNode(p3Data % 10);
        // 超过时则需要进位
        carry = p3Data > 9 ? 1 : 0
        l3 = l3.next

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }

    // 当最后一位仍有进位时，最后一位加上进位
    if (carry > 0) {
        l3.next = new ListNode(carry);
    }
    return dummy.next
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = addTwoNumbers;
// @after-stub-for-debug-end