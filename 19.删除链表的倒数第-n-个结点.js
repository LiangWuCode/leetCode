/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let index = 0;
    // 创建哑结点
    let noNode = new ListNode(-1)
    noNode.next = head
    // 循环出一共有多少个节点
    let indexNodeList = noNode
    // 循环找到第节点长度-n的点即为要删除的
    let targetNodeList = noNode
    while (indexNodeList.next) {
        index++
        indexNodeList = indexNodeList.next
    }

    let length = index - n
    while (length > 0) {
        targetNodeList = targetNodeList.next
        length--
    }

    targetNodeList.next = targetNodeList.next.next
    return noNode.next
};
// @lc code=end

// removeNthFromEnd(new ListNode(1), 1)

// @after-stub-for-debug-begin
module.exports = removeNthFromEnd;
// @after-stub-for-debug-end