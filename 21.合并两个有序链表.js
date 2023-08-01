/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let noNode = list2
    while (list1.next) {
        let list2 = noNode
        let flag = true;
        while (list2.next && flag) {
            if (list1.val >= list2.val) {
                let temp = list2.next
                list2.next = new ListNode(list1.val)
                list2.next.next = temp
                flag = false
            } else {
                list2 = list2.next
            }
        }
        list1 = list1.next
    }
    console.log(noNode)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end