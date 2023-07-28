/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let index = 1
    let initString = "()"
    
    while (n > 1 && index < n) {
        initString = initString.slice(0, index) + '()' + initString.slice(index)
        index++
    }
    console.log(initString)

    let length = 2 * n - 1
    let flagIndex = 1
    while (length % 2 === 1) {
        let length1 = length
        let nowItem = initString
        let addString = ""
        let flagIndex1 = 0
        while (flagIndex1 < flagIndex) {
            addString = addString + '()'
            flagIndex1++
        }
        nowItem = nowItem.slice(0, nowItem.length / 2 - 1) + nowItem.slice(nowItem.length / 2)
        for (let i = 0; i < length1; i++) {


        }
        length -= length - 2
    }
};
// @lc code=end
generateParenthesis(3)
