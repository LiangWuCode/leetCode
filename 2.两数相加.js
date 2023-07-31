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

class ListNode {
    constructor() {
        this.head = null; //头指针，指向第一个链表节点
        this.length = 0; //链表的长度
    }

    //创建链表节点的方法
    createNode(data) {
        return {
            data,
            next: null
        }
    }

    toString() {
        // 1.定义两个变量
        let current = this.head
        let res = ""

        // 2.循环获取链表中所有的元素
        while (current) {
            res += "," + current.data
            current = current.next
        }

        // 3.返回最终结果
        return res.slice(1)
    }

    append(data) {
        //1. 创建新节点
        const node = this.createNode(data);

        //2. 判断是否是空链表
        if (this.head === null) {
            // 如果是空链表，新节点直接作为头节点
            this.head = node;
        } else {
            // 如果不是空链表，先拿到头指针
            let current = this.head;
            // 从头遍历直到末尾的节点
            while (current.next) {
                current = current.next;
            }

            //找到了末尾节点，插入新节点
            current.next = node;
        }

        //3. 链表长度 + 1
        this.length++;
    }

    insert(position, data) {
        // 1. 越界判断
        if (position < 0 || position > this.length) return false

        // 2.找到正确的位置, 并插入数据
        const newNode = this.createNode(data);
        let current = this.head
        let previous = null
        let index = 0

        // 3.判断是否列表是否在第一个位置插入
        if (position == 0) {
            newNode.next = current
            this.head = newNode
        } else {
            while (index++ < position) {
                // 记录当前节点
                previous = current
                // 再遍历下一个节点
                current = current.next
            }

            // 插入节点
            newNode.next = current
            previous.next = newNode
        }

        this.length++

        return true
    }

    remove(data) {
        // 1. current 从头节点开始，previous 记录上一个节点
        let current = this.head
        let previous = null

        // 2. 如果是删除头节点
        if (current.data === data) {
            this.head = current.next
            current.next = null
            this.length--
            return
        }

        // 3. 查找要删除的那个节点
        while (current !== null && current.data !== data) {
            previous = current
            current = current.next
        }

        // 4. 如果没找到要删除的节点
        if (current === null) {
            throw new Error("dont find the node to delete")
        }

        // 5. 找到了，删除节点
        previous.next = current.next ?? null;
        current.next = null

        // 6. 长度减一
        this.length--
    }

    indexOf(data) {
        let current = this.head
        let index = 0

        // 遍历链表
        while (current) {
            if (current.data === data) {
                return index
            }

            index++
            current = current.next
        }

        // 3. 来到这个位置, 说明没有找到, 则返回-1
        return -1
    }

    removeAt(position) {
        // 1. 越界判断
        if (position < 0 || position >= this.length) return null

        let current = this.head
        let previous = null
        let index = 0

        // 2. 判断是否是移除第一项
        if (position === 0) {
            this.head = current.next
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }

            previous.next = current.next
        }

        // 4.length-1
        this.length--

        // 5.返回移除的数据
        return current.data
    }

    isEmpty() {
        return this.length === 0
    }

    size() {
        return this.length
    }
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let l3 = new ListNode();
    let p1 = l1.head;
    let p2 = l2.head;
    let p3 = l3;

    while (p1 || p2) {
        let p3Data = p1.data + p2.data
        if (p3Data<10){
            
        }

            console.log(p1)
        p1 = p1.next
        p2 = p2.next
    }

};
let l1 = new ListNode();
l1.append(2)
l1.append(4)
l1.append(3)
let l2 = new ListNode();
l2.append(5)
l2.append(6)
l2.append(4)
addTwoNumbers(l1, l2)

// @lc code=end

